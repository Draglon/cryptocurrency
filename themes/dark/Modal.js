import { Dimensions } from 'react-native';

import { COLORS, MODAL } from '../../constants/variables';

const { height } = Dimensions.get('window');

export default {
  containerStyle: {
    backgroundColor: COLORS.grayLight,
  },
  headerStyle: {
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingBottom: MODAL.paddingBottom,
    paddingLeft: MODAL.paddingLeft,
    paddingRight: MODAL.paddingRight,
    height: 80,
  },
  buttonCloseProps: {},
  iconProps: {},
  bodyStyle: {
    paddingTop: MODAL.paddingTop,
    paddingBottom: MODAL.paddingBottom,
    paddingLeft: MODAL.paddingLeft,
    paddingRight: MODAL.paddingRight,
    height: height - 140,
  },
  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: MODAL.paddingTop,
    paddingBottom: MODAL.paddingBottom,
    paddingLeft: MODAL.paddingLeft,
    paddingRight: MODAL.paddingRight,
    height: 60,
  },
  customSubmitButtonStyle: {
    buttonStyle: {
      minWidth: 100,
    },
  },
};
