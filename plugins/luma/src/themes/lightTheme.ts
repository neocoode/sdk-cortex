import { animations, borderRadius, spacing, transitions, typography } from './commom';
import { Theme } from './types';

export const lightTheme: Theme = {
  colors: {
    background: 'bg-[#FFFFFF]', // fundo geral
    foreground: 'text-[#181A1B]', // texto padrão
    primary: 'bg-[#2563EB]', // cor primária
    primaryForeground: 'text-[#FFFFFF]', // texto sobre primária
    secondary: 'bg-[#E5E7EB]', // cor secundária
    secondaryForeground: 'text-[#23272A]', // texto sobre secundária
    
    backgroundPrimary: 'bg-[#F3F4F6]', // topo, cards principais (cinza muito claro)
    backgroundSecondary: 'bg-[#E5E7EB]', // área de mensagens (cinza claro)  
    
    iconBackgroundHover: ' hover:bg-[#656565FF]',    
    iconBackgroundActive: ' hover:bg-[#474747FF]',    
    
    iconBackgroundSecondaryHover: ' hover:bg-[#656565FF]',    
    iconBackgroundSecondaryActive: ' hover:bg-[#474747FF]',    
    
    backgroundAccent: 'bg-[#F9FAFB]', // input/chat (quase branco)
    backgroundError: 'bg-[#EF4444]', // vermelho erro
    backgroundSuccess: 'bg-[#22C55E]', // verde sucesso
    backgroundWarning: 'bg-[#F59E0B]', // laranja aviso
    backgroundInfo: 'bg-[#3B82F6]', // azul informação
    backgroundForeground: 'bg-[#F3F4F6]', // área de mensagens
    text: 'text-[#181A1B]', // texto preto suave
    textPrimary: 'text-[#23272A]', // texto principal (preto mais intenso)
    textSecondary: 'text-[#6B7280]', // texto secundário (cinza)
    textAccent: 'text-[#2563EB]', // destaque (links, botões)
    textError: 'text-[#B91C1C]', // texto erro (vermelho forte)
    textSuccess: 'text-[#15803D]', // texto sucesso
    textWarning: 'text-[#B45309]', // texto aviso
    textInfo: 'text-[#1D4ED8]', // texto informação
    backgroundTertiary: 'bg-[#F3F4F6]',
    
    backgroundTableHeader: 'bg-[#F3F4F6]',
    backgroundTable: 'bg-[#F3F4F6]'
  },

  typography: typography,
  spacing: spacing,
  borderRadius: borderRadius,
  transitions: transitions,
  animations: animations,
  
  icons: {
    primary: 'text-[#6B7280]',         // ícones cinza padrão
    accent: 'text-[#2563EB]',           // ícones destaque azul
  },

  shadows: {
    small: 'shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
    medium: 'shadow-[0_2px_4px_rgba(0,0,0,0.08)]',
    large: 'shadow-[0_4px_6px_rgba(0,0,0,0.1)]',
  },
  
  borders: {
    default: 'border border-[#D1D5DB]',       // borda padrão cinza clara
    focus: 'border border-[#2563EB]',          // borda em foco azul
    error: 'border border-[#EF4444]',          // borda em erro
  },
  
  buttons: {
    primary: 'bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8]',         // botão primário azul
    secondary: 'bg-[#E5E7EB] text-[#23272A] hover:bg-[#D1D5DB]',       // botão secundário cinza claro
    danger: 'bg-[#EF4444] text-[#FFFFFF] hover:bg-[#DC2626]',          // botão de erro vermelho
  } 
  
};
