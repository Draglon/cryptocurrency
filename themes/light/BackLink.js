import { COLORS } from '../../constants/variables';

export default {
  style: {
    alignItems: 'flex-start',
  },
  buttonProps: {
    type: 'clear',
    titleStyle: {
      color: COLORS.blue,
    },
  },
  iconProps: {
    iconName: 'angle-left',
    iconSize: 24,
    iconColor: COLORS.blue,
    iconStyle: {
      marginRight: 10,
    },
  },
};
