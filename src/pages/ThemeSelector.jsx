import React, { useState } from 'react';
import { Mic2, Disc, Heart, ArrowRight } from 'lucide-react';
import './ThemeSelector.css';

const ThemeSelector = () => {
    const [activeTheme, setActiveTheme] = useState('stage');

    return (
        <div className={`theme-preview-page theme-${activeTheme}`}>
            {/* Control Panel */}
            <div className="theme-controls">
                <h2>ARTISTIC ENERGY</h2>
                <p className="subtitle">Performance Vibes. Not Gym Vibes.</p>
                <div className="theme-buttons">
                    <button
                        className={`theme-btn ${activeTheme === 'stage' ? 'active' : ''}`}
                        onClick={() => setActiveTheme('stage')}
                    >
                        STAGE PRESENCE (Concert)
                    </button>
                    <button
                        className={`theme-btn ${activeTheme === 'urban_soul' ? 'active' : ''}`}
                        onClick={() => setActiveTheme('urban_soul')}
                    >
                        URBAN SOUL (Cinematic)
                    </button>
                    <button
                        className={`theme-btn ${activeTheme === 'crimson' ? 'active' : ''}`}
                        onClick={() => setActiveTheme('crimson')}
                    >
                        CRIMSON FLOW (Intense)
                    </button>
                </div>
            </div>

            {/* Live Preview Area */}
            <div className="preview-container">

                {/* Hero Preview */}
                <section className="preview-hero">
                    <div className="preview-content">
                        <span className="preview-tag">EST. 2012</span>
                        <h1>EVOLUTION <span className="highlight">ACADEMY</span></h1>
                        <p>FEEL THE BEAT. OWN THE STAGE.</p>
                        <div className="preview-btns">
                            <button className="preview-btn-primary">START DANCING</button>
                            <button className="preview-btn-secondary">WATCH PERFORMANCE <ArrowRight size={18} /></button>
                        </div>
                    </div>
                </section>

                {/* Cards Preview */}
                <section className="preview-cards">
                    <div className="preview-card">
                        <div className="card-icon"><Mic2 size={32} /></div>
                        <h3>Showcase</h3>
                        <p>Perform under the lights with professional choreography.</p>
                    </div>
                    <div className="preview-card active">
                        <div className="card-icon"><Disc size={32} /></div>
                        <h3>Rhythm</h3>
                        <p>Find your groove in our high-energy hip-hop sessions.</p>
                    </div>
                    <div className="preview-card">
                        <div className="card-icon"><Heart size={32} /></div>
                        <h3>Passion</h3>
                        <p>Connect with your emotions through contemporary dance.</p>
                    </div>
                </section>

                {/* Typography Preview */}
                <section className="preview-typo">
                    <h2>THEME <span className="highlight">VIBE</span></h2>
                    <p>
                        {activeTheme === 'stage' && "Dramatic Purple & Pink spotlights against a dark background. Feels like being on a concert stage or in a music video. Exciting, vibrant, but artistic."}
                        {activeTheme === 'urban_soul' && "Cinematic Teal & Orange lighting. Very moody, cool, and modern. Feels like a high-budget dance movie or street culture magazine."}
                        {activeTheme === 'crimson' && "Deep Glowing Red. Not the 'aggressive sport red', but a 'passionate neon red'. Feels intense, warm, and powerful."}
                    </p>
                </section>

            </div>
        </div>
    );
};

export default ThemeSelector;
