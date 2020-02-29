import { Dimensions } from 'react-native';

import { COLORS } from '../../constants/variables';
import logo from '../../assets/images/logo.png';

const { height, width } = Dimensions.get('window');

export default {
  // ================= React Native Elements =================
  Divider: {

  },
  // Button: {

  // },
  Icon: {
    type: 'font-awesome',
    size: 18,
  },

  // ================ Custom Elements ========================
  // Header
  Header: {
    style: {
      backgroundColor: COLORS.gray,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      height: 70,
    },
  },
  MenuButton: {
    style: {
      width: 50,
      height: 30,
    },
    iconColor: COLORS.white,
  },
  // Pages
  Page: {
    main: {
      flex: 1,
      alignItems: 'stretch',
    },
    page: {
      flex: 1,
      backgroundColor: COLORS.dark,
    },
    layout: {
      flex: 1,
      backgroundColor: COLORS.dark,
      alignItems: 'stretch',
    },
  },
  // Sidebar
  Sidebar: {
    style: {
      backgroundColor: '#fff',
      position: 'absolute',
      top: 0,
      left: 0,
      height,
      width,
      zIndex: 999,
      transitionDuration: '1s',
      transitionProperty: 'left',
    },
  },
  SidebarHeader: {
    style: {
      backgroundColor: COLORS.light,
      height: 70,
    },
  },
  // Shared
  Logo: {
    style: {
      width: 100,
      height: 40,
    },
    source: logo,
  },
  ButtonClose: {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 30,
      height: 30,
    },
    iconName: 'times',
    iconColor: COLORS.gray,
  },
};
