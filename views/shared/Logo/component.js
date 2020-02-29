import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Image } from 'react-native-elements';

const Logo = ({ theme }) => (
  <Image
    source={theme.Logo.source}
    containerStyle={theme.Logo.style}
  />
);

Logo.propTypes = {
  theme: PropTypes.shape({
    Logo: PropTypes.shape({
      source: PropTypes.any.isRequired,
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(Logo);
