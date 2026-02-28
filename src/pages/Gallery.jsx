import React, { useState } from 'react';
import { getGalleryImages } from './AdminGallery';
import './Gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const images = getGalleryImages();

    const categories = ['All', ...new Set(images.map(img => img.category))];

    const filteredImages = activeFilter === 'All'
        ? images
        : images.filter(img => img.category === activeFilter);

    const [lightboxImg, setLightboxImg] = useState(null);

    return (
        <div className="gallery-page">
            <div className="page-header-gallery">
                <h1>Our <span className="highlight">Gallery</span></h1>
                <p>Moments of dedication, joy, and triumph.</p>
            </div>

            {/* Filter Buttons */}
            <div className="gallery-filters container">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="gallery-grid container">
                {filteredImages.map((img, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setLightboxImg(img)}
                    >
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <div className="overlay">
                            <span>{img.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxImg && (
                <div className="lightbox" onClick={() => setLightboxImg(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
                        <img src={lightboxImg.src} alt={lightboxImg.alt} />
                        <p className="lightbox-caption">{lightboxImg.alt}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
