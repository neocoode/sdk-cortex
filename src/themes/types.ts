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
  backgroundTertiary: string;
  backgroundQuaternary: string;

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
  backgroundTableHeader: string;
  backgroundTable: string;

  backgroundSuggestionPrimary: string;
  backgroundSuggestionSecondary: string;
  colorSuggestionPrimary: string;
  colorSuggestionSecondary: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    msmall1: string;
    msmall2: string;
    msmall3: string;
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
  suggestions: string;
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
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
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  borders: ThemeBorders;
  buttons: ThemeButtons;
  icons: ThemeIcons;
  animations: ThemeAnimations;
  
  hovers: ThemeHovers;
  actives: ThemeActives;
  
  borderRadius: ThemeBorderRadius;
  borderHover: ThemeBorderHover; 
  borderActive: ThemeBorderActive;
}

export interface ThemeHovers {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
}

export interface ThemeActives {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
}

export interface ThemeBorderHover {
  primary: string;
  secondary: string;
  tertiary: string; 
  quaternary: string;
  quinary: string;
  senary: string;
}

export interface ThemeBorderActive {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
}

export interface ThemeContextType {
  theme: ThemeMode;
  themeSelected: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}