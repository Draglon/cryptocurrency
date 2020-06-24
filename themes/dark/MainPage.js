import { Dimensions } from 'react-native';

import { COLORS, BORDER } from '../../constants/variables';

const { height } = Dimensions.get('window');

export default {
  style: {
    position: 'relative',
  },
  headerStyle: {},
  headerItemStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerTitleStyle: {
    marginBottom: 0,
  },
  showCurrencyButton: {
    titleStyle: {
      fontSize: 14,
    },
    buttonStyle: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      paddingTop: 0,
      paddingBottom: 0,
      height: 30,
      width: 50,
    },
  },
  showCurrencyInput: {
    inputStyle: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderColor: COLORS.grayLighter,
      borderStyle: 'solid',
      borderWidth: 1,
    },
  },
  scroll: {
    height: height - 265,
  },
  bodyStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  addToSetBtn: {
    buttonProps: {
      containerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
      },
      buttonStyle: {
        justifyContent: 'center',
        alignContent: 'center',
      },
    },
    iconProps: {
      iconName: 'plus',
      iconSize: 24,
      iconColor: COLORS.white,
    },
  },
};
