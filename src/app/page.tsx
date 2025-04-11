'use client';

import { useTheme } from 'next-themes';

export default function Home() {

    const { theme, setTheme } = useTheme();

    return (
        <div className='flex flex-col items-start p-6 gap-3'>
            <button className='py-2 px-3 bg-green-400 rounded-lg' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
            <span>Current Theme: {theme}</span>
        </div>
    );
}