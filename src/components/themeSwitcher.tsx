'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='flex items-center gap-3'>
            <Switch checked={theme === 'light'} onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} id='theme-switcher' className='cursor-pointer'/>
            <Label htmlFor='theme-switcher' className='cursor-pointer'>
                {theme === 'light' ? <Sun size={20}/> : <Moon size={20}/>}
            </Label>
        </div>
    );
}