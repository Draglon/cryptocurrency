import { COLORS } from '../../constants/variables';

export default {
  style: {
    alignItems: 'flex-start',
  },
  buttonProps: {
    type: 'clear',
    titleStyle: {
      color: COLORS.white,
    },
  },
  iconProps: {
    iconName: 'angle-left',
    iconSize: 24,
    iconColor: COLORS.white,
    iconStyle: {
      marginRight: 10,
    },
  },
};
