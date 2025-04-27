'use client';

import { useTheme } from '@/themes/themeContext';
import React from 'react';
import packageJson from '../../../../package.json';

interface FooterProps {
  version?: string;
  date?: string;
}

const Footer: React.FC<FooterProps> = ({
  version = packageJson.version,
  date = packageJson.date
}) => {
  const { themeSelected } = useTheme();

  return (
    <div 
      className={`
        flex justify-center items-center pt-2 
        ${themeSelected.typography.fontSize.medium} 
        ${themeSelected.colors.textSecondary}
      `}
    >
      Luma {version} - {date}
    </div>
  );
};

export default Footer;