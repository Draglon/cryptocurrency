import { COLORS, INPUT } from '../../constants/variables';

export default {
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.grayLighter,
    borderStyle: INPUT.borderStyle,
    borderWidth: INPUT.borderWidth,
    borderRadius: INPUT.borderRadius,
    fontSize: INPUT.fontSize,
    paddingLeft: INPUT.paddingLeft,
    paddingRight: INPUT.paddingRight,
    marginLeft: 0,
    marginRight: 0,
    height: INPUT.height,
    minHeight: INPUT.height,
  },
  labelStyle: {},
  labelProps: {},
  disabledInputStyle: {},
  errorStyle: {},
  errorProps: {},
  leftIconContainerStyle: {
    marginLeft: 0,
    marginRight: 0,
    width: 0,
  },
  rightIconContainerStyle: {
    marginLeft: 0,
    marginRight: 0,
  },
};
