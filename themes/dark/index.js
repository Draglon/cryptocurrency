import { COLORS } from '../../constants/variables';

import Header from './Header';
import MenuButton from './MenuButton';
import Sidebar from './Sidebar';
import SidebarHeader from './SidebarHeader';
import Page from './Page';
import Logo from './Logo';
import ButtonPrimary from './ButtonPrimary';
import ButtonClose from './ButtonClose';

export default {
  // ================= React Native Elements =================
  Divider: {

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
  // Shared
  Logo,
  ButtonPrimary,
  ButtonClose,
};
