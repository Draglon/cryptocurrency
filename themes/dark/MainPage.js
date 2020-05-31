import { COLORS } from '../../constants/variables';

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
  bodyStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
};
