'use client';

import { ThemeProvider, ThemeProviderProps } from 'next-themes';
import { useEffect, useState } from 'react';

export default function NextThemeProvider({ children, ...props }: ThemeProviderProps) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if(!mounted) return null;

    return (
        <ThemeProvider {...(props)}>
            {children}
        </ThemeProvider>
    );
}