export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  
  iconBackgroundHover: string;
  iconBackgroundActive: string;
  iconBackgroundSecondaryHover: string;
  iconBackgroundSecondaryActive: string;
  
  backgroundAccent: string;
  backgroundError: string;
  backgroundSuccess: string;
  backgroundWarning: string;
  backgroundInfo: string;
  text: string;
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
  textError: string;
  textSuccess: string;
  textWarning: string;
  textInfo: string;
  backgroundForeground: string;
  backgroundTertiary: string;
  backgroundTableHeader: string;
  backgroundTable: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    msmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  fontWeight: {
    light: string;
    regular: string;
    medium: string;
    bold: string;
    xbold: string;
  };
  lineHeight: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface ThemeSpacing {
  msmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

export interface ThemeBorderRadius {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
}

export interface ThemeShadows {
  small: string;
  medium: string;
  large: string;
}

export interface ThemeTransitions {
  fast: string;
  medium: string;
  slow: string;
}

export interface ThemeBorders {
  default: string;
  focus: string;
  error: string;
}

export interface ThemeButtons {
  primary: string;
  secondary: string;
  danger: string;
}

export interface ThemeIcons {
  primary: string;
  accent: string;
}

export interface ThemeAnimations {
  pulse: string;
  bounce: string;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  borders: ThemeBorders;
  buttons: ThemeButtons;
  icons: ThemeIcons;
  animations: ThemeAnimations;
}

export interface ThemeContextType {
  theme: ThemeMode;
  themeSelected: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}