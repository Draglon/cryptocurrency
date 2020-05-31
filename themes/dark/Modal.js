import { Dimensions } from 'react-native';

import { COLORS, MODAL } from '../../constants/variables';

const { height, width } = Dimensions.get('window');

export default {
  overlayStyle: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.overlayBlack,
    paddingTop: MODAL.paddingTop,
    paddingBottom: MODAL.paddingBottom,
    paddingLeft: MODAL.paddingLeft,
    paddingRight: MODAL.paddingRight,
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    zIndex: 9999,
  },
  containerStyle: {
    width: '100%',
  },
  headerStyle: {
    backgroundColor: COLORS.grayLight,
    borderTopStartRadius: MODAL.borderRadius,
    borderTopRightRadius: MODAL.borderRadius,
    position: 'relative',
  },
  titleStyle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 0,
    minHeight: 40,
  },
  buttonProps: {
    type: 'clear',
    containerStyle: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    buttonStyle: {
      justifyContent: 'center',
      alignContent: 'center',
      width: 40,
      height: 40,
    },
  },
  iconProps: {
    iconName: 'times',
    iconSize: 24,
    iconColor: COLORS.white,
  },
  bodyStyle: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: MODAL.borderRadius,
    borderBottomRightRadius: MODAL.borderRadius,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: 200,
    maxHeight: height - 50,
  },
  bodyContentStyle: {
    minHeight: 150,
  },
  bodyButtonsStyle: {
    paddingTop: 10,
    minHeight: 50,
  },
};
