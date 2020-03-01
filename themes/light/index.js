import { COLORS } from '../../constants/variables';

import Header from './Header';
import MenuButton from './MenuButton';
import {
  Sidebar, SidebarHeader, SidebarBody, SidebarWrapper,
} from './Sidebar';
import { Menu, MenuItem, MenuItemIcon } from './Menu';
import { Themes, ThemesItem } from './Themes';
import { Languages, LanguagesItem } from './Languages';
import Page from './Page';
import Logo from './Logo';
import ButtonPrimary from './ButtonPrimary';
import ButtonClose from './ButtonClose';

export default {
  // ================= React Native Elements =================
  Divider: {
    backgroundColor: COLORS.gray,
    height: 2,
  },
  Text: {
    h1Style: {
      color: COLORS.gray,
    },
    h2Style: {
      color: COLORS.gray,
    },
    h3Style: {
      color: COLORS.gray,
    },
    h4Style: {
      color: COLORS.gray,
    },
    style: {
      color: COLORS.grayLight,
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
  SidebarWrapper,
  Menu,
  MenuItem,
  MenuItemIcon,
  Themes,
  ThemesItem,
  Languages,
  LanguagesItem,
  // Shared
  Logo,
  ButtonPrimary,
  ButtonClose,
};
