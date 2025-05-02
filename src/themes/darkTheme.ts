import { animations, borderRadius, spacing, transitions, typography } from './commom';
import { Theme } from './types';

let darkTheme: Theme = {
  colors: {
    background: 'bg-[#121212]', // fundo geral
    foreground: 'text-[#F3F4F6]', // texto padrão
    primary: 'bg-[#2563EB]', // cor primária
    primaryForeground: 'text-[#FFFFFF]', // texto sobre primária
    secondary: 'bg-[#374151]', // cor secundária
    secondaryForeground: 'text-[#E5E7EB]', // texto sobre secundária

    backgroundPrimary: 'bg-[#1E1E1E]', // topo, cards principais
    backgroundSecondary: 'bg-[#4F4F4FFF]', // área de mensagens
    backgroundTertiary: 'bg-[#2F2F2FFF]',
    backgroundQuaternary: 'bg-[#252525FF]',
    backgroundForeground: 'bg-[#F3F4F6]', // área de mensagens

    backgroundSuggestionPrimary: 'bg-[#252525FF]',
    backgroundSuggestionSecondary: 'bg-[#104F8AFF]',
    colorSuggestionPrimary: 'text-[#A8A8A8FF]',
    colorSuggestionSecondary: 'text-[#FFFFFFFF]',

    iconBackgroundHover: ' hover:bg-[#656565FF]',
    iconBackgroundActive: ' active:bg-[#474747FF]',
    iconBackgroundSecondaryHover: ' hover:bg-[#656565FF]',
    iconBackgroundSecondaryActive: ' active:bg-[#474747FF]',

    backgroundAccent: 'bg-[#4A4A4AFF]', // input/chat
    backgroundError: 'bg-[#EF4444]', // vermelho erro
    backgroundSuccess: 'bg-[#22C55E]', // verde sucesso
    backgroundWarning: 'bg-[#F59E0B]', // laranja aviso
    backgroundInfo: 'bg-[#3B82F6]', // azul informação

    backgroundTableHeader: 'bg-[#2D4F87FF]',
    backgroundTable: 'bg-[#2A4166FF]',

    text: 'text-[#F3F4F6]', // texto padrão
    textPrimary: 'text-[#E5E7EB]', // texto principal
    textSecondary: 'text-[#9CA3AF]', // texto secundário
    textTertiary: 'text-[#616161FF]', // texto terciário
    textQuaternary: 'text-[#3F3F3FFF]', // texto quaternário
    textQuinary: 'text-[#151515FF]', // texto quinary

    textAccent: 'text-[#60A5FA]', // destaques (links, botões)
    textError: 'text-[#F87171]', // texto de erro
    textSuccess: 'text-[#34D399]', // texto de sucesso
    textWarning: 'text-[#FBBF24]', // texto de aviso
    textInfo: 'text-[#60A5FA]', // texto de informação
  },

  

  title: {
    primary: 'text-[#FBBF24]',
    secondary: 'text-[#BFAD7EFF]',
    tertiary: 'text-[#FBBF24]',
    quaternary: 'text-[#BFAD7EFF]',
    quinary: 'text-[#FBBF24]',
  },

  typography: typography,
  spacing: spacing,
  borderRadius: borderRadius,
  transitions: transitions,
  animations: animations,

  shadows: {
    small: 'shadow-[0_1px_2px_0_#4F4F4FFF]',
    medium: 'shadow-[0_2px_4px_#4F4F4FFF]',
    large: 'shadow-[0_4px_6px_#4F4F4FFF]',
  },

  hovers: {
    primary: 'hover:bg-[#7B7B7BFF]',
    secondary: 'hover:bg-[#676767FF]',
    tertiary: 'hover:bg-[#3A3A3AFF]',
    quaternary: 'hover:bg-[#222222FF]',
    quinary: 'hover:bg-[#1F1F1FFF]',
    senary: 'hover:bg-[#0F0F0FFF]',

    backgroundForeground: 'hover:bg-[#DDDDDDFF]',
  },

  button: {
    primary: ' ',
    secondary: ' ',
    tertiary: ' ',
    quaternary: ' ',
    quinary: ' ',
    senary: ' ',
  },

  actives: {
    primary: 'active:bg-[#7B7B7BFF]',
    secondary: 'active:bg-[#676767FF]',
    tertiary: 'active:bg-[#3A3A3AFF]',
    quaternary: 'active:bg-[#222222FF]',
    quinary: 'active:bg-[#1F1F1FFF]',
    senary: 'active:bg-[#0F0F0FFF]',
  },

  buttons: {
    primary: 'bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8]', // botão primário
    secondary: 'bg-[#374151] text-[#E5E7EB] hover:bg-[#4B5563]', // botão secundário
    danger: 'bg-[#EF4444] text-[#FFFFFF] hover:bg-[#DC2626]', // botão de erro
  },

  icons: {
    primary: 'text-[#9CA3AF]', // cor de ícones padrão
    accent: 'text-[#60A5FA]', // cor de ícones destacados
  },

  borderHover: {
    primary: 'hover:border-[#7B7B7BFF]',
    secondary: 'hover:border-[#676767FF]',
    tertiary: 'hover:border-[#3A3A3AFF]',
    quaternary: 'hover:border-[#222222FF]',
    quinary: 'hover:border-[#1F1F1FFF]',
    senary: 'hover:border-[#0F0F0FFF]',
  },

  borderActive: {
    primary: 'active:border-[#7B7B7BFF]',
    secondary: 'active:border-[#676767FF]',
    tertiary: 'active:border-[#3A3A3AFF]',
    quaternary: 'active:border-[#222222FF]',
    quinary: 'active:border-[#1F1F1FFF]',
    senary: 'active:border-[#0F0F0FFF]',
  },

  borders: {
    suggestions: 'border border-[#3A3C40FF]', // borda padrão
    default: 'border border-[#46608BFF]', // borda padrão
    focus: 'border border-[#3F5B87FF]', // borda em foco (inputs, botões)
    error: 'border border-[#EF4444]',

    primary: 'border border-[#7B7B7BFF]',
    secondary: 'border border-[#676767FF]',
    tertiary: 'border border-[#3A3A3AFF]',
    quaternary: 'border border-[#222222FF]',
    quinary: 'border border-[#1F1F1FFF]',
    senary: 'border border-[#0F0F0FFF]', // borda em erro
  },
  
  link: {
    primary: ' ',
    secondary: ' ',
    tertiary: ' ',
    quaternary: ' ',
    quinary: ' ',
  },

  links: {
    text: 'text-[#FBBF24]',
    hover: 'hover:text-[#BFAD7EFF]',
  },
};

darkTheme = {
  ...darkTheme,
  button: {
    primary: `
          cursor-pointer py-2 w-full 
          ${darkTheme.colors.backgroundForeground}
          ${darkTheme.borders.secondary}
          ${darkTheme.hovers.backgroundForeground}
          ${darkTheme.borderRadius.xxlarge}
          ${darkTheme.shadows.large}
          ${darkTheme.typography.fontSize.medium}
          ${darkTheme.colors.textQuinary}
    `,
    secondary: `
          cursor-pointer py-2 w-full 
          ${darkTheme.colors.backgroundTertiary}
          ${darkTheme.borders.tertiary}
          ${darkTheme.hovers.tertiary}
          ${darkTheme.borderRadius.xxlarge}
          ${darkTheme.shadows.small}
          ${darkTheme.typography.fontSize.medium}
          ${darkTheme.colors.textSecondary}
    `,
    tertiary: ' ',
    quaternary: ' ',
    quinary: ' ',
    senary: ' ',
  },

  title: {
    primary: `
      ${darkTheme.colors.textPrimary}
      ${darkTheme.typography.fontSize.medium}
      p-5
    `,
    secondary: ' ',
    tertiary: ' ',
    quaternary: ' ',
    quinary: `
      ${darkTheme.colors.textPrimary}
      ${darkTheme.typography.fontSize.medium}
      p-5
    `,
  },

  link: {
    primary: `
            block text-sm  underline 
            text-[#FBBF24]
            hover:text-[#F5D074FF]
            active:text-[#AB8E47FF]
    `,
    secondary: ' ',
    tertiary: ' ',
    quaternary: ' ',
    quinary: ' ',
  },
}
export { darkTheme };
