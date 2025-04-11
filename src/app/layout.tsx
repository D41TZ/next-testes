import NextThemeProvider from '../providers/NextThemeProvider';
import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-BR' suppressHydrationWarning>
            <body className='antialiased h-100'>
                <NextThemeProvider defaultTheme='light' attribute='class' enableSystem storageKey='theme' disableTransitionOnChange={false}>
                    {children}
                </NextThemeProvider>
            </body>
        </html>
    );
}