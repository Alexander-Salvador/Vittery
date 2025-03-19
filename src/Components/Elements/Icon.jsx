import React from 'react';
import PropTypes from 'prop-types';

export function Icon({ icon: IconComponent, size = 24, className }) {
  return <IconComponent size={size} className={className} />;
}

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
