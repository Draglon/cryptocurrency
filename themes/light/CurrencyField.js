import { COLORS, INPUT } from '../../constants/variables';

export default {
  containerStyle: {
    paddingBottom: 10,
  },
  customInputStyle: {
    inputContainerStyle: {
      flex: 1,
      flexDirection: 'row',
    },
    inputStyle: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: COLORS.white,
      borderColor: COLORS.grayLighter,
      borderStyle: INPUT.borderStyle,
      borderWidth: INPUT.borderWidth,
      borderTopStartRadius: INPUT.borderRadius,
      borderBottomLeftRadius: INPUT.borderRadius,
      paddingLeft: INPUT.paddingLeft,
      paddingRight: INPUT.paddingRight,
      height: INPUT.height,
    },
    inputTextStyle: {
      fontSize: INPUT.fontSize,
      marginBottom: 0,
    },
    rightIconContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.grayLighter,
      borderColor: COLORS.grayLighter,
      borderStyle: INPUT.borderStyle,
      borderWidth: INPUT.borderWidth,
      borderLeftWidth: 0,
      borderTopRightRadius: INPUT.borderRadius,
      borderBottomRightRadius: INPUT.borderRadius,
      height: INPUT.height,
      width: 50,
    },
    rightIconStyle: {
      color: COLORS.dark,
      fontSize: INPUT.fontSize,
      marginBottom: 0,
    },
  },
  textHintStyle: {
    color: COLORS.dark,
    fontSize: 10,
    paddingTop: 2,
    paddingLeft: 2,
    marginBottom: 0,
  },
};
