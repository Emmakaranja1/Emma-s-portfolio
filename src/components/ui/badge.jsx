import React from 'react';
import './Badge.css';

export const Badge = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClass = 'badge-base';
    const variantClass = {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        warning: 'badge-warning',
        error: 'badge-error',
    }[variant] || 'badge-primary';

    return (
        <span className={`${baseClass} ${variantClass} ${className}`} {...props}>
            {children}
        </span>
    );
};
