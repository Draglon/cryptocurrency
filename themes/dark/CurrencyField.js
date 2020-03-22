import { COLORS } from '../../constants/variables';

export default {
  containerStyle: {
    paddingBottom: 10,
  },
  customInputStyle: {
    inputStyle: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderColor: COLORS.grayLighter,
      borderStyle: 'solid',
      borderWidth: 1,
    },
    rightIconContainerStyle: {
      backgroundColor: COLORS.grayLighter,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      borderColor: COLORS.grayLighter,
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      alignItems: 'center',
      height: 30,
      width: 50,
    },
  },
  textCurrencyStyle: {
    color: COLORS.dark,
    marginBottom: 0,
  },
  textHintStyle: {
    color: COLORS.light,
    fontSize: 10,
    paddingTop: 2,
    paddingLeft: 2,
    marginBottom: 0,
  },
};
