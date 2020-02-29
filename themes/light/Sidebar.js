import { Dimensions } from 'react-native';

import { COLORS } from '../../constants/variables';

const { height, width } = Dimensions.get('window');

export default {
  style: {
    backgroundColor: COLORS.light,
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
    zIndex: 999,
    transitionDuration: '1s',
    transitionProperty: 'left',
  },
};
