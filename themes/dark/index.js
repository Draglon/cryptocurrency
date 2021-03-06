import { COLORS } from '../../constants/variables';

import Header from './Header';
import MenuButton from './MenuButton';
import { Page, PageBody, PageWrapper } from './Page';
import MainPage from './MainPage';
import {
  Sidebar, SidebarHeader, SidebarBody, SidebarWrapper,
} from './Sidebar';
import { Menu, MenuTitle, MenuItem } from './Menu';
import { Themes, ThemesItem } from './Themes';
import { Languages, LanguagesItem } from './Languages';
import { MySets, MySetsEmpty } from './MySets';
import { CreateSet } from './CreateSet';
import Logo from './Logo';
import BackLink from './BackLink';
import ButtonClose from './ButtonClose';
import ButtonPrimary from './ButtonPrimary';
import ButtonCheckbox from './ButtonCheckbox';
import InputField from './InputField';
import CurrencyField from './CurrencyField';
import Modal from './Modal';

export default {
  // ================= React Native Elements =================
  Divider: {
    style: {
      backgroundColor: COLORS.white,
      height: 2,
    },
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
  // MainPage
  MainPage,
  // Sidebar
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarWrapper,
  Menu,
  MenuTitle,
  MenuItem,
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
  ButtonClose,
  ButtonPrimary,
  ButtonCheckbox,
  InputField,
  CurrencyField,
  // Modal
  Modal,
};
