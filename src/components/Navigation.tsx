import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navigation.css';

export const Navigation = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    const navItems = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'education',
        'contact'
    ];

    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-brand">
                        <span className="nav-title">Emma Karanja</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-desktop">
                        <div className="nav-links">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className="nav-link"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="nav-mobile-toggle">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="nav-icon"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="nav-mobile-menu">
                    <div className="nav-mobile-links">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className="nav-mobile-link"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

