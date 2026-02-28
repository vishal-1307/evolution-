import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, GripVertical, Save, Eye, LogOut, ArrowUp, ArrowDown, Image, X } from 'lucide-react';
import './AdminGallery.css';

const ADMIN_PASSWORD = 'evolution@2015';
const STORAGE_KEY = 'evolution_gallery_config';

/* --- helpers --- */
const defaultImages = [
    { src: "/photo-015.jpg", category: "Performance", alt: "Group dance at Sharad Mahotsav" },
    { src: "/photo-060.jpg", category: "Performance", alt: "Bihar Udyami Mela performance" },
    { src: "/photo-020.jpg", category: "Performance", alt: "Solo classical dance performance" },
    { src: "/photo-025.jpg", category: "Performance", alt: "Solo dance on stage" },
    { src: "/photo-070.jpg", category: "Performance", alt: "Group dance on stage" },
    { src: "/photo-045.jpg", category: "Performance", alt: "Dance competition performance" },
    { src: "/photo-001.jpg", category: "Events", alt: "Student performing at school event" },
    { src: "/photo-005.jpg", category: "Events", alt: "Cultural event performance" },
    { src: "/photo-010.jpg", category: "Events", alt: "Republic Day cultural performance" },
    { src: "/photo-035.jpg", category: "Events", alt: "Dance at school function" },
    { src: "/photo-090.jpg", category: "Events", alt: "Madhubani Mahotsav group photo" },
    { src: "/photo-100.jpg", category: "Events", alt: "Sharad Mahotsav event" },
    { src: "/photo-030.jpg", category: "Awards", alt: "Award ceremony - receiving trophy" },
    { src: "/photo-119.jpg", category: "Awards", alt: "Navratri Elite Club certificate" },
    { src: "/photo-065.jpg", category: "Awards", alt: "Students with awards on stage" },
    { src: "/photo-055.jpg", category: "Awards", alt: "Dance Ka Dangal TV show participation" },
    { src: "/photo-080.jpg", category: "Team", alt: "Instructor with students group selfie" },
    { src: "/photo-040.jpg", category: "Team", alt: "Dance team group photo" },
    { src: "/photo-050.jpg", category: "Team", alt: "Academy team outing" },
    { src: "/photo-110.jpg", category: "Team", alt: "Team selfie with students" },
];

const categories = ['Performance', 'Events', 'Awards', 'Team'];

const loadGalleryConfig = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return null;
};

const saveGalleryConfig = (images) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
};

/* --- exported loader for Gallery page --- */
export const getGalleryImages = () => {
    return loadGalleryConfig() || defaultImages;
};

/* --- Component --- */
const AdminGallery = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [images, setImages] = useState([]);
    const [saved, setSaved] = useState(false);
    const [filterCategory, setFilterCategory] = useState('All');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newImage, setNewImage] = useState({ src: '', category: 'Performance', alt: '' });
    const [dragIndex, setDragIndex] = useState(null);
    const navigate = useNavigate();

    // Check if already authenticated in session
    useEffect(() => {
        const session = sessionStorage.getItem('admin_auth');
        if (session === 'true') {
            setAuthenticated(true);
            setImages(getGalleryImages());
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthenticated(true);
            sessionStorage.setItem('admin_auth', 'true');
            setImages(getGalleryImages());
            setError('');
        } else {
            setError('Incorrect password. Access denied.');
            setPassword('');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin_auth');
        setAuthenticated(false);
        navigate('/about');
    };

    const handleSave = () => {
        saveGalleryConfig(images);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleRemove = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return;
        setImages(prev => {
            const copy = [...prev];
            [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
            return copy;
        });
    };

    const handleMoveDown = (index) => {
        if (index === images.length - 1) return;
        setImages(prev => {
            const copy = [...prev];
            [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
            return copy;
        });
    };

    const handleCategoryChange = (index, newCat) => {
        setImages(prev => prev.map((img, i) => i === index ? { ...img, category: newCat } : img));
    };

    const handleAltChange = (index, newAlt) => {
        setImages(prev => prev.map((img, i) => i === index ? { ...img, alt: newAlt } : img));
    };

    const handleAddImage = () => {
        if (!newImage.src) return;
        setImages(prev => [...prev, { ...newImage }]);
        setNewImage({ src: '', category: 'Performance', alt: '' });
        setShowAddModal(false);
    };

    const handleReset = () => {
        if (window.confirm('Reset gallery to default? This will remove all changes.')) {
            setImages([...defaultImages]);
        }
    };

    // Drag & Drop
    const handleDragStart = (index) => setDragIndex(index);
    const handleDragOver = (e) => e.preventDefault();
    const handleDrop = (dropIndex) => {
        if (dragIndex === null || dragIndex === dropIndex) return;
        setImages(prev => {
            const copy = [...prev];
            const [dragged] = copy.splice(dragIndex, 1);
            copy.splice(dropIndex, 0, dragged);
            return copy;
        });
        setDragIndex(null);
    };

    const filteredImages = filterCategory === 'All'
        ? images
        : images.filter(img => img.category === filterCategory);

    /* --- Login Screen --- */
    if (!authenticated) {
        return (
            <div className="admin-login-page">
                <div className="admin-login-card">
                    <div className="admin-login-icon">🔐</div>
                    <h2>Admin Access</h2>
                    <p>Enter the admin password to manage gallery</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            autoFocus
                        />
                        {error && <span className="admin-error">{error}</span>}
                        <button type="submit" className="admin-login-btn">Unlock</button>
                    </form>
                </div>
            </div>
        );
    }

    /* --- Admin Dashboard --- */
    return (
        <div className="admin-page">
            {/* Top Bar */}
            <div className="admin-topbar">
                <div className="admin-topbar-left">
                    <h1>📸 Gallery Manager</h1>
                    <span className="admin-badge">{images.length} photos</span>
                </div>
                <div className="admin-topbar-right">
                    <button className="admin-btn btn-preview" onClick={() => window.open('/gallery', '_blank')}>
                        <Eye size={16} /> Preview
                    </button>
                    <button className={`admin-btn btn-save ${saved ? 'saved' : ''}`} onClick={handleSave}>
                        <Save size={16} /> {saved ? 'Saved!' : 'Save Changes'}
                    </button>
                    <button className="admin-btn btn-logout" onClick={handleLogout}>
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="admin-toolbar">
                <div className="admin-filters">
                    {['All', ...categories].map(cat => (
                        <button
                            key={cat}
                            className={`admin-filter-btn ${filterCategory === cat ? 'active' : ''}`}
                            onClick={() => setFilterCategory(cat)}
                        >
                            {cat} {cat === 'All' ? `(${images.length})` : `(${images.filter(i => i.category === cat).length})`}
                        </button>
                    ))}
                </div>
                <div className="admin-actions">
                    <button className="admin-btn btn-add" onClick={() => setShowAddModal(true)}>
                        <Plus size={16} /> Add Photo
                    </button>
                    <button className="admin-btn btn-reset" onClick={handleReset}>
                        Reset to Default
                    </button>
                </div>
            </div>

            {/* Photo Grid */}
            <div className="admin-grid">
                {filteredImages.map((img, idx) => {
                    const realIndex = images.indexOf(img);
                    return (
                        <div
                            key={realIndex}
                            className={`admin-card ${dragIndex === realIndex ? 'dragging' : ''}`}
                            draggable
                            onDragStart={() => handleDragStart(realIndex)}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(realIndex)}
                        >
                            <div className="admin-card-img">
                                <img src={img.src} alt={img.alt} />
                                <div className="admin-card-overlay">
                                    <span className="admin-card-order">#{realIndex + 1}</span>
                                    <GripVertical size={20} className="drag-handle" />
                                </div>
                            </div>
                            <div className="admin-card-body">
                                <input
                                    className="admin-card-alt"
                                    value={img.alt}
                                    onChange={(e) => handleAltChange(realIndex, e.target.value)}
                                    placeholder="Description..."
                                />
                                <div className="admin-card-controls">
                                    <select
                                        value={img.category}
                                        onChange={(e) => handleCategoryChange(realIndex, e.target.value)}
                                    >
                                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <div className="admin-card-btns">
                                        <button onClick={() => handleMoveUp(realIndex)} title="Move up"><ArrowUp size={14} /></button>
                                        <button onClick={() => handleMoveDown(realIndex)} title="Move down"><ArrowDown size={14} /></button>
                                        <button className="btn-danger" onClick={() => handleRemove(realIndex)} title="Delete"><Trash2 size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Add Photo Modal */}
            {showAddModal && (
                <div className="admin-modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="admin-modal" onClick={e => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <h2><Image size={20} /> Add New Photo</h2>
                            <button onClick={() => setShowAddModal(false)}><X size={20} /></button>
                        </div>
                        <div className="admin-modal-body">
                            <label>Image Path (filename in /public folder)</label>
                            <input
                                type="text"
                                value={newImage.src}
                                onChange={(e) => setNewImage(prev => ({ ...prev, src: e.target.value.startsWith('/') ? e.target.value : '/' + e.target.value }))}
                                placeholder="/photo-001.jpg"
                            />
                            <div className="admin-modal-preview">
                                {newImage.src && <img src={newImage.src} alt="Preview" onError={(e) => e.target.style.display = 'none'} />}
                            </div>
                            <label>Category</label>
                            <select value={newImage.category} onChange={(e) => setNewImage(prev => ({ ...prev, category: e.target.value }))}>
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <label>Description</label>
                            <input
                                type="text"
                                value={newImage.alt}
                                onChange={(e) => setNewImage(prev => ({ ...prev, alt: e.target.value }))}
                                placeholder="Dance performance at cultural event..."
                            />
                        </div>
                        <div className="admin-modal-footer">
                            <button className="admin-btn btn-cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
                            <button className="admin-btn btn-add" onClick={handleAddImage} disabled={!newImage.src}>Add Photo</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminGallery;
