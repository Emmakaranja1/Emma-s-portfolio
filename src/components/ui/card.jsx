import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({ children, className, ...props }) => {
    return (
        <div
            className={`card-base ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export const CardHeader = ({ children, className, ...props }) => (
    <div
        className={`card-header ${className}`}
        {...props}
    >
        {children}
    </div>
);

CardHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export const CardContent = ({ children, className, ...props }) => (
    <div
        className={`card-content ${className}`}
        {...props}
    >
        {children}
    </div>
);

CardContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export const CardDescription = ({ children, className, ...props }) => (
    <div
        className={`card-description ${className}`}
        {...props}
    >
        {children}
    </div>
);

CardDescription.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export const CardTitle = ({ children, className, ...props }) => (
    <h3
        className={`card-title ${className}`}
        {...props}
    >
        {children}
    </h3>
);

CardTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
