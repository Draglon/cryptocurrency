import { COLORS } from '../../constants/variables';

export const Menu = {
  style: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export const MenuTitle = {
  style: {
    marginBottom: 15,
  },
};

export const MenuItem = {
  style: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingBottom: 10,
  },
  buttonProps: {
    type: 'clear',
    titleStyle: {
      color: COLORS.white,
      fontSize: 14,
    },
    buttonStyle: {
      padding: 0,
    },
  },
  iconProps: {
    iconName: 'folder-open',
    iconSize: 18,
    iconColor: COLORS.white,
    iconStyle: {
      marginRight: 10,
    },
  },
};
