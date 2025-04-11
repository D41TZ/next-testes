import NextThemeProvider from '../providers/NextThemeProvider';
import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-BR' className='h-full' suppressHydrationWarning>
            <body className='antialiased h-full duration-200'>
                <NextThemeProvider defaultTheme='light' attribute='class' enableSystem storageKey='theme'>
                    {children}
                </NextThemeProvider>
            </body>
        </html>
    );
}