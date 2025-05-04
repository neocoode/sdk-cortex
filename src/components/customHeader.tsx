'use client';
import { Download, PanelLeftClose, PanelLeftOpen, Settings } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { useSession } from '@/contexts/sessionContext';
import { RootState } from '@/store';
import { useTheme } from '@/themes/themeContext';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import UserMenu from './userMenu/userMenu';

interface CustomHeaderProps {
    toggleSidebar: () => void;
    isSidebarVisible: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ toggleSidebar, isSidebarVisible }) => {
    const router = useRouter();
    const { isLoggedIn } = useSession();
    const { themeSelected } = useTheme();
    const [plan, setPlan] = useState({
        plan: '',
        planName: ''
    });
    
    const chatSelectedState = useSelector((state: RootState) => state.chatSelected);   
    const configAllState = useSelector((state: RootState) => state.configAll);    

    useEffect(() => {
        setPlan({
            plan:configAllState.fields.plan,
            planName:configAllState.fields.planName
        })
    }, [configAllState]);

    const handleAccessAccount = () => {
        router.push('/account/access');
    }

    
    
    return (
        <header className={`flex h-18 p-4 ${themeSelected.shadows.small} flex justify-between items-center`}>
            <div className="flex items-center">
                {isLoggedIn && (
                    <>
                        {isSidebarVisible ? 
                            <PanelLeftClose size={35} className={`${themeSelected.colors.text} m-2 cursor-pointer`} strokeWidth={1} onClick={toggleSidebar} />
                            :
                            <PanelLeftOpen size={35} className={`${themeSelected.colors.text} m-2 cursor-pointer`} strokeWidth={1} onClick={toggleSidebar} />
                        }
                        <Settings size={35} className={`${themeSelected.colors.text} m-2 cursor-pointer`} strokeWidth={1} />
                        <div className={`${themeSelected.colors.text} ${themeSelected.typography.fontSize.large}`}></div>
                    </>
                )}
            </div>
            <div className="flex justify-end items-center">
                {chatSelectedState.messages.length > 0 && (
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
                )}
                <div className="flex justify-center items-center px-5">
                    {isLoggedIn ? (
                        <UserMenu />
                    ) : (
                        <>
                            <button className={`${themeSelected.button.tertiary} mx-2`} onClick={handleAccessAccount}>Entrar</button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;
