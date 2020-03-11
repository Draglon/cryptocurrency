import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Text } from 'react-native-elements';

import ButtonPrimary from '../../shared/ButtonPrimary';
import ButtonCheckbox from '../../shared/ButtonCheckbox';

const MainPage = ({ onAddToSet }) => (
  <>
    <Text>Default set</Text>
    <ButtonPrimary
      size="small"
      title="Add to set"
      onPress={onAddToSet}
    />

    <ButtonCheckbox
      title="Checkbox"
      checked
    />
  </>
);

MainPage.propTypes = {
  onAddToSet: PropTypes.func.isRequired,
};

export default withTheme(MainPage);
