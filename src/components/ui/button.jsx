import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({
  variant = 'default',
  size = 'md',
  asChild,
  className = '',
  children,
  ...props
}) => {
  const baseClass = 'button-base';
  const variantClass = variant === 'outline' ? 'button-outline' : 'button-default';
  const sizeClass =
    size === 'lg' ? 'button-lg' :
      size === 'sm' ? 'button-sm' :
        'button-md';

  const combined = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${combined} ${children.props.className || ''}`.trim(),
      ...props,
    });
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  asChild: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
