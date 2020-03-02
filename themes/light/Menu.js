import { COLORS } from '../../constants/variables';

export const Menu = {
  style: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export const MenuItem = {
  style: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: 15,
  },
  buttonProps: {
    type: 'clear',
    titleStyle: {
      color: COLORS.gray,
    },
  },
  iconProps: {
    iconName: 'folder-open',
    iconSize: 24,
    iconColor: COLORS.gray,
    iconStyle: {
      marginRight: 15,
    },
  },
};
