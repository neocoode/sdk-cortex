'use client';

import { useTheme } from '@/themes/themeContext';
import { useState } from 'react';
import {
    FaCog,
    FaExternalLinkAlt,
    FaMagic,
    FaRobot,
    FaSignOutAlt,
    FaTasks
} from 'react-icons/fa';
import UserMenuItem from './userMenuItem';

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const { themeSelected } = useTheme();

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    const menuItems = [
        { icon: FaTasks, label: 'Tarefas' },
        { icon: FaRobot, label: 'Meus GPTs' },
        { icon: FaMagic, label: 'Personalizar' },
        { icon: FaCog, label: 'Configurações' },
        { icon: FaExternalLinkAlt, label: 'Fazer upgrade do plano' },
        { icon: FaSignOutAlt, label: 'Sair', color: themeSelected.colors.textError }
    ];

    return (
        <div
            className="relative inline-block text-left mr-2"
            onMouseLeave={closeMenu}
        >
            <button onClick={toggleMenu} className="relative w-10 h-10">
                <img
                    src="/profileDefault.jpeg"
                    alt="Avatar"
                    className={`
                        w-10 h-10 rounded-full border-1 shadow-md
                        ${themeSelected.transitions.fast}
                        ${themeSelected.borders.quaternary}
                        ${themeSelected.borderHover.tertiary}
                        ${themeSelected.borderActive.secondary}
                    `}
                />
                <span 
                    className={`
                        absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 
                        rounded-full border border-black shadow
                        py-[1px] px-1.5 font-semibold bg-white text-black
                        ${themeSelected.typography.fontSize.msmall2} 
                    `}
                >
                    PLUS
                </span>
            </button>

            {open && (
                <div className={`
                    absolute -right-2 -mt-1 w-85 z-50 
                    ${themeSelected.borderRadius.xlarge}
                    ${themeSelected.shadows.large}
                    ${themeSelected.colors.backgroundQuaternary}
                    ${themeSelected.colors.text}
                `}>
                    <ul className="m-3">
                        {menuItems.map((item, index) => (
                            <UserMenuItem 
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                color={item?.color || themeSelected.colors.text}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
function useAppSelector(arg0: (state: any) => any) {
    throw new Error('Function not implemented.');
}

