'use client';

import useIdentify from '@/hooks/useIdentify';
import React from 'react';

interface CustomLayoutProps {
    children: React.ReactNode;
}

function CustomLayout({ children }: CustomLayoutProps) {
    useIdentify();
    return <>{children}</>;
}

export default CustomLayout;
