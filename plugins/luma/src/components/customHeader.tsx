'use client';
import SvgIcon from '@/components/svgIcon';
import { useTheme } from '@/themes/themeContext';
import React from 'react';

interface CustomHeaderProps {
    toggleSidebar: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ toggleSidebar }) => {
    const { themeSelected } = useTheme();

    return (
        <header className={`flex h-18 p-4 ${themeSelected.shadows.small} flex justify-between items-center`}>
            <div className="flex items-center">
                <button onClick={toggleSidebar} >
                    <SvgIcon name="menu2" className={`${themeSelected.colors.text} w-10 h-10`} />
                </button>
                <div className={`${themeSelected.colors.text} ${themeSelected.typography.fontSize.large}`}></div>
            </div>
            <div className="flex items-center">
                <button className={`flex items-center ${themeSelected.borders.default} ${themeSelected.typography.fontSize.small} ${themeSelected.colors.text} ${themeSelected.borderRadius.xxlarge} bg-transparent hover:${themeSelected.colors.backgroundSecondary} ${themeSelected.transitions.fast} py-1 px-4`}>
                    <SvgIcon 
                        name="search2" 
                        className={`${themeSelected.colors.text} mr-2`} 
                        width={25} 
                        height={25} 
                    />
                    Compartilhar
                </button>
            </div>
        </header>
    );
};

export default CustomHeader;
