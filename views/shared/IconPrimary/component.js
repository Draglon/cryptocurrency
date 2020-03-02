import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

const IconPrimary = ({
  iconType,
  iconStyle,
  iconColor,
  iconName,
  iconSize,
}) => (
  <Icon
    type={iconType}
    name={iconName}
    size={iconSize}
    color={iconColor}
    iconStyle={iconStyle}
  />
);

IconPrimary.defaultProps = {
  iconType: 'font-awesome',
  iconSize: 18,
  iconColor: 'black',
  iconStyle: {},
};

IconPrimary.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.shape({}),
};

export default IconPrimary;
