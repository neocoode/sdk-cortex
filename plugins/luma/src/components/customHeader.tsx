'use client';
import React from 'react';
import { Settings, Download, PanelLeft } from 'lucide-react';

import { useTheme } from '@/themes/themeContext';

interface CustomHeaderProps {
    toggleSidebar: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ toggleSidebar }) => {
    const { themeSelected } = useTheme();

    return (
        <header className={`flex h-18 p-4 ${themeSelected.shadows.small} flex justify-between items-center`}>
            <div className="flex items-center">
                <PanelLeft size={28} className={`${themeSelected.colors.text} m-2 cursor-pointer`} strokeWidth={1} onClick={toggleSidebar} />
                <Settings size={28} className={`${themeSelected.colors.text} m-2 cursor-pointer`} strokeWidth={1} />
                <div className={`${themeSelected.colors.text} ${themeSelected.typography.fontSize.large}`}></div>
            </div>
            <div className="flex items-center">
                <button
                    className={`
                        flex flex-row items-center justify-between 
                        ${themeSelected.borders.default} 
                        ${themeSelected.typography.fontSize.small} 
                        ${themeSelected.colors.text} 
                        ${themeSelected.borderRadius.xlarge} 
                        ${themeSelected.transitions.fast} 
                        bg-transparent hover:${themeSelected.colors.backgroundSecondary} 
                    `}>
                    <Download
                        size={20}
                        className={`
                            ml-3 mr-2 my-2 cursor-pointer
                            ${themeSelected.colors.text} 
                        `}
                        strokeWidth={1}
                    />
                    <span 
                        className={`
                            mr-3 my-2 cursor-pointer
                        ${themeSelected.colors.text} 
                        `}
                    >Compartilhar</span>
                </button>
            </div>
        </header>
    );
};

export default CustomHeader;
