import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import ButtonAddToSetComponent from './component';

class ButtonAddToSetContainer extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    animatedButtonSize: new Animated.Value(0),
    animatedButtonOpacity: new Animated.Value(0),
    animatedIconFontSize: new Animated.Value(0),
  };

  componentDidMount() {
    const {
      animatedButtonSize,
      animatedButtonOpacity,
      animatedIconFontSize,
    } = this.state;

    Animated.parallel([
      Animated.timing(animatedButtonOpacity, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(animatedButtonSize, {
        toValue: 60,
        duration: 1000,
      }),
      Animated.timing(animatedIconFontSize, {
        toValue: 24,
        duration: 1000,
      }),
    ]).start();
  }

  handleAddToSet = () => {
    const { navigation } = this.props;
    navigation.navigate('AddCurrencies');
  }

  render() {
    return (
      <ButtonAddToSetComponent
        {...this.props}
        {...this.state}
        onAddToSet={this.handleAddToSet}
      />
    );
  }
}

export default ButtonAddToSetContainer;
