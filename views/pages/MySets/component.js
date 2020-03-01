import React from 'react';
import PropTypes from 'prop-types';

import BackLink from '../../shared/BackLink';
import MySetsEmpty from './Empty';

const MySetsComponent = ({ navigation, onBackLink }) => (
  <>
    <BackLink onPress={onBackLink} />
    <MySetsEmpty navigation={navigation} />
  </>
);

MySetsComponent.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  onBackLink: PropTypes.func.isRequired,
};

export default MySetsComponent;
