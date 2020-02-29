import { COLORS } from '../../constants/variables';

import Header from './Header';
import MenuButton from './MenuButton';
import Sidebar from './Sidebar';
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import Menu from './Menu';
import Themes from './Themes';
import Languages from './Languages';
import Page from './Page';
import Logo from './Logo';
import ButtonPrimary from './ButtonPrimary';
import ButtonClose from './ButtonClose';

export default {
  // ================= React Native Elements =================
  Divider: {
    backgroundColor: COLORS.light,
    height: 2,
  },
  Text: {
    h1Style: {
      color: COLORS.white,
    },
    h2Style: {
      color: COLORS.white,
    },
    h3Style: {
      color: COLORS.white,
    },
    h4Style: {
      color: COLORS.white,
    },
    style: {
      color: COLORS.grayLighter,
    },
  },
  Icon: {
    type: 'font-awesome',
    size: 18,
  },

  // ================ Custom Elements ========================
  // Header
  Header,
  MenuButton,
  // Pages
  Page,
  // Sidebar
  Sidebar,
  SidebarHeader,
  SidebarBody,
  Menu,
  Themes,
  Languages,
  // Shared
  Logo,
  ButtonPrimary,
  ButtonClose,
};
