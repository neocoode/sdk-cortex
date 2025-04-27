import { animations, borderRadius, spacing, transitions, typography } from './commom';
import { Theme } from './types';

export const darkTheme: Theme = {
  colors: {
    background: 'bg-[#121212]',            // fundo geral
    foreground: 'text-[#F3F4F6]',          // texto padrão
    primary: 'bg-[#2563EB]',               // cor primária
    primaryForeground: 'text-[#FFFFFF]',   // texto sobre primária
    secondary: 'bg-[#374151]',             // cor secundária
    secondaryForeground: 'text-[#E5E7EB]', // texto sobre secundária
    backgroundPrimary: 'bg-[#1E1E1E]',      // topo, cards principais
    backgroundSecondary: 'bg-[#4F4F4FFF]',    // área de mensagens
    backgroundForeground: 'bg-[#F3F4F6]',    // área de mensagens
    
    iconBackgroundHover: ' hover:bg-[#656565FF]',    
    iconBackgroundActive: ' active:bg-[#474747FF]',    
  iconBackgroundSecondaryHover: ' hover:bg-[#656565FF]',    
    iconBackgroundSecondaryActive: ' active:bg-[#474747FF]',
        
    backgroundAccent: 'bg-[#4A4A4AFF]',       // input/chat
    backgroundError: 'bg-[#EF4444]',        // vermelho erro
    backgroundSuccess: 'bg-[#22C55E]',      // verde sucesso
    backgroundWarning: 'bg-[#F59E0B]',      // laranja aviso
    backgroundInfo: 'bg-[#3B82F6]',          // azul informação
    
    backgroundTableHeader: 'bg-[#2D4F87FF]',
    backgroundTable: 'bg-[#2A4166FF]',

    text: 'text-[#F3F4F6]',                 // texto padrão
    textPrimary: 'text-[#E5E7EB]',           // texto principal
    textSecondary: 'text-[#9CA3AF]',         // texto secundário
    textAccent: 'text-[#60A5FA]',            // destaques (links, botões)
    textError: 'text-[#F87171]',             // texto de erro
    textSuccess: 'text-[#34D399]',           // texto de sucesso
    textWarning: 'text-[#FBBF24]',           // texto de aviso
    textInfo: 'text-[#60A5FA]',              // texto de informação
    backgroundTertiary: 'bg-[#2F2F2FFF]',
  },

  typography: typography,
  spacing: spacing,
  borderRadius: borderRadius,
  transitions: transitions,
  animations: animations,

  shadows: {
    small: 'shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
    medium: 'shadow-[0_2px_4px_rgba(0,0,0,0.08)]',
    large: 'shadow-[0_4px_6px_rgba(0,0,0,0.1)]',
  },


  borders: {
    default: 'border border-[#46608BFF]',       // borda padrão
    focus: 'border border-[#3F5B87FF]',          // borda em foco (inputs, botões)
    error: 'border border-[#EF4444]',          // borda em erro
  },

  buttons: {
    primary: 'bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8]',         // botão primário
    secondary: 'bg-[#374151] text-[#E5E7EB] hover:bg-[#4B5563]',       // botão secundário
    danger: 'bg-[#EF4444] text-[#FFFFFF] hover:bg-[#DC2626]',          // botão de erro
  },

  icons: {
    primary: 'text-[#9CA3AF]',         // cor de ícones padrão
    accent: 'text-[#60A5FA]',           // cor de ícones destacados
  },
};
