'use client';

import useIdentify from '@/hooks/useIdentify';
import React, { useEffect } from 'react';

interface CustomLayoutProps {
    children: React.ReactNode;
}

function CustomLayout({ children }: CustomLayoutProps) {
    const fingerprint = useIdentify();

    useEffect(() => {
        if (fingerprint) {
            console.log('🆔 Fingerprint gerado:', fingerprint);
        }
    }, [fingerprint]);

    return <>{children}</>;
}

export default CustomLayout;
