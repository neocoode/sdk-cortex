'use client';

import { useTheme } from '@/themes/themeContext';
import { IconType } from 'react-icons';

interface UserMenuItemProps {
    icon: IconType;
    label: string;
    color: string;
}

const UserMenuItem = ({ icon: Icon, label, color }: UserMenuItemProps) => {
    const { themeSelected } = useTheme();

    return (
        <li
            className={`
                p-3 flex items-center gap-2 cursor-pointer 
                ${themeSelected.hovers.tertiary} 
                ${themeSelected.borderRadius.large}                
            `}
        >
            <Icon
                className={`
                    ${themeSelected.typography.fontSize.medium}                
                    ${color}
            `} />
            <span 
                className={`
                    ${themeSelected.typography.fontSize.medium}                
                    ${color}
                `}
            >{label}</span>
        </li>
    );
};

export default UserMenuItem;
