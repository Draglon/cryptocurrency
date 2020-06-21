import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { withTheme } from 'react-native-elements';

import ButtonPrimary from '../../../shared/ButtonPrimary';
import IconPrimary from '../../../shared/IconPrimary';

const ButtonAddToSetComponent = ({
  theme,
  animatedButtonSize,
  animatedButtonOpacity,
  animatedIconFontSize,
  onAddToSet,
}) => (
  <ButtonPrimary
    title=""
    onPress={onAddToSet}
    customStyle={{
      ...theme.MainPage.addToSetBtn.buttonProps,
      buttonStyle: {
        opacity: animatedButtonOpacity,
        width: animatedButtonSize,
        height: animatedButtonSize,
        borderRadius: animatedButtonSize / 2,
      },
    }}
    icon={(
      <IconPrimary
        {...theme.MainPage.addToSetBtn.iconProps}
        iconSize={animatedIconFontSize}
      />
    )}
  />
);

ButtonAddToSetComponent.propTypes = {
  theme: PropTypes.shape({
    MainPage: PropTypes.shape({
      addToSetBtn: PropTypes.shape({
        buttonProps: PropTypes.shape({}).isRequired,
        iconProps: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  animatedButtonSize: PropTypes.number.isRequired,
  animatedButtonOpacity: PropTypes.number.isRequired,
  animatedIconFontSize: PropTypes.number.isRequired,
  onAddToSet: PropTypes.func.isRequired,
};

export default Animatable.createAnimatableComponent(withTheme(ButtonAddToSetComponent));
