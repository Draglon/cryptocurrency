import { COLORS } from '../constants/variables';

export default {
  // React Native Elements
  Button: {
    containerStyle: {
      width: 150,
    },
    titleStyle: {
      color: COLORS.white,
    },
  },
  Icon: {
    type: 'font-awesome',
    size: 24,
  },

  // Custom Elements
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
  Logo: {
    style: {
      width: 100,
      height: 40,
    },
  },
  MenuButton: {
    style: {
      width: 50,
      height: 30,
    },
    iconColor: COLORS.white,
  },
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
  IconClose: {
    containerStyle: {
      color: COLORS.gray,
      position: 'absolute',
      top: 10,
      right: 10,
      width: 30,
      height: 30,
      lineHeight: 30,
      textAlign: 'center',
    },
  },
};
