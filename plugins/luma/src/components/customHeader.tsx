'use client';
import SvgIcon from '@/components/svgIcon';
import React from 'react';

interface CustomHeaderProps {
    toggleSidebar: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="h-18 shadow-sm p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <button onClick={toggleSidebar} className="text-white">
                    <SvgIcon name="menu2" className="text-white w-10 h-10" />
                </button>
                <div className="text-white text-2xl">Messaging Room</div>
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default CustomHeader;
