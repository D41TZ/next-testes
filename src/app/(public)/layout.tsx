import { Sidebar, SidebarProvider, SidebarHeader, SidebarContent, SidebarFooter, SidebarTrigger, SidebarMenuItem } from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import ThemeSwitcher from '@/components/themeSwitcher';
import { ChevronDown, ChevronUp, Search, User } from 'lucide-react';
// import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import Link from 'next/link';

function HeaderLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <Link href={href} className='px-5 h-8 flex items-center hover:bg-zinc-200 dark:hover:bg-zinc-700 duration-100'>
            {children}
        </Link>
    );
}

function AppSidebar() {
    return (
        <Sidebar className='duration-300 ease-in-out'>
            <SidebarHeader>
                <Link href='/' className='text-6xl text-center duration-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-3'>LOGO</Link>
            </SidebarHeader>
            <SidebarContent>
                <Collapsible defaultOpen className='group/collapsible'>
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Cadastros
                                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuButton asChild>
                                        <Link href='/products'>Produtos</Link>
                                    </SidebarMenuButton>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User />
                                    Usuário
                                    <ChevronUp className='ms-auto' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side='top' align='end' className='w-[239px]'>
                                <DropdownMenuItem>
                                    <span>Mudar Filial</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Mudar Empresa</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sair</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export default function Public({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <SidebarProvider className='h-full flex flex-col'>
            <header className='flex justify-center items-center relative h-8 px-5 bg-zinc-50 border-b dark:bg-zinc-900 space-x-3'>
                <SidebarTrigger/>
                <Button className='w-3xs h-6 cursor-pointer flex justify-between px-1' variant='outline' size='sm'>
                    <span className='flex items-center gap-2 text-zinc-500 dark:text-zinc-400'>
                        <Search />
                        Search...
                    </span>
                    <span className='h-4 text-[11px] border rounded px-1 bg-zinc-100 dark:bg-zinc-600'>
                        Ctrl K
                    </span>
                </Button>
                <ThemeSwitcher />
            </header>
            <div className='h-full flex'>
                <AppSidebar />
                <main id='content' className='flex-grow-1 p-3 flex justify-center'>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}