export interface Theme {
  colors: {
    background: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
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
  };

  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontWeight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
    lineHeight: {
      small: string;
      medium: string;
      large: string;
    };
  };

  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };

  shadows: {
    small: string;
    medium: string;
    large: string;
  };

  transitions: {
    fast: string;
    medium: string;
    slow: string;
  };

  borders: {
    default: string;
    focus: string;
    error: string;
  };

  buttons: {
    primary: string;
    secondary: string;
    danger: string;
  };

  icons: {
    primary: string;
    accent: string;
  };

  animations: {
    pulse: string;
    bounce: string;
  };
}
