import { COLORS } from '../../constants/variables';

import Header from './Header';
import MenuButton from './MenuButton';
import {
  Sidebar, SidebarHeader, SidebarBody, SidebarWrapper,
} from './Sidebar';
import { Menu, MenuItem, MenuItemIcon } from './Menu';
import { Themes, ThemesItem } from './Themes';
import { Languages, LanguagesItem } from './Languages';
import { Page, PageBody, PageWrapper } from './Page';
import { MySets, MySetsEmpty } from './MySets';
import { CreateSet } from './CreateSet';
import Logo from './Logo';
import BackLink from './BackLink';
import ButtonPrimary from './ButtonPrimary';
import ButtonClose from './ButtonClose';

export default {
  // ================= React Native Elements =================
  Divider: {
    backgroundColor: COLORS.white,
    height: 2,
  },
  Text: {
    h1Style: {
      color: COLORS.white,
      marginBottom: 15,
    },
    h2Style: {
      color: COLORS.white,
      marginBottom: 15,
    },
    h3Style: {
      color: COLORS.white,
      marginBottom: 15,
    },
    h4Style: {
      color: COLORS.white,
      marginBottom: 12,
    },
    style: {
      color: COLORS.grayLight,
      marginBottom: 10,
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
  PageBody,
  PageWrapper,
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
  // My sets - page
  MySets,
  MySetsEmpty,
  // Create set - page
  CreateSet,
  // Shared
  Logo,
  BackLink,
  ButtonPrimary,
  ButtonClose,
};
