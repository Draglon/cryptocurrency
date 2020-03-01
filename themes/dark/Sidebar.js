import { Dimensions } from 'react-native';

import { COLORS } from '../../constants/variables';

const { height, width } = Dimensions.get('window');

export const Sidebar = {
  style: {
    backgroundColor: COLORS.dark,
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
    zIndex: 999,
    transitionDuration: '1s',
    transitionProperty: 'left',
  },
};

export const SidebarHeader = {
  style: {
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
  },
};

export const SidebarBody = {
  style: {
    height: height - 148,
  },
};

export const SidebarWrapper = {
  style: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
};
