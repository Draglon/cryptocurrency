import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

const IconPrimary = ({
  iconStyle,
  iconColor,
  iconName,
  iconSize,
}) => (
  <Icon
    name={iconName}
    size={iconSize}
    color={iconColor}
    iconStyle={iconStyle}
  />
);

IconPrimary.defaultProps = {
  iconStyle: {},
  iconSize: 18,
  iconColor: 'black',
};

IconPrimary.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.shape({}),
};

export default IconPrimary;
