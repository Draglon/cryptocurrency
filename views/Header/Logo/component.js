import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Image } from 'react-native-elements';

import logo from '../../../assets/images/logo.png';

const Logo = ({ theme }) => (
  <Image
    source={logo}
    containerStyle={theme.Logo.style}
  />
);

Logo.propTypes = {
  theme: PropTypes.shape({
    Logo: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(Logo);
