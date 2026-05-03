import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    MessageSquare,
    PieChart,
    Sliders,
    ListChecks,
    Bot,
    Settings,
    Wallet,
    Bell,
} from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

const nav = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/chat', label: 'Chat', icon: MessageSquare },
    { href: '/portfolio', label: 'Portfolio', icon: PieChart },
    { href: '/strategies', label: 'Strategies', icon: Sliders },
    { href: '/activity', label: 'Activity', icon: ListChecks },
    { href: '/agents', label: 'Agents', icon: Bot },
    { href: '/settings', label: 'Settings', icon: Settings },
];

export const AppLayout = ({
    children,
    title,
    subtitle,
}: {
    children: ReactNode;
    title: string;
    subtitle?: string;
}) => {
    const pathname = usePathname();

    return (
        <div className='flex min-h-screen w-full'>
            {/* Sidebar */}
            <aside className='sticky top-0 hidden h-screen w-60 shrink-0 border-r border-border/60 bg-surface/70 px-4 py-5 md:flex md:flex-col'>
                <Link href='/' className='px-2'>
                    <Logo />
                </Link>
                <nav className='mt-8 flex flex-col gap-1'>
                    {nav.map((n) => {
                        const isActive = pathname === n.href;
                        return (
                            <Link
                                key={n.href}
                                href={n.href}
                                className={cn(
                                    'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors',
                                    isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                                )}
                            >
                                <n.icon className='h-4 w-4' />
                                {n.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className='mt-auto rounded-xl border border-border/60 bg-surface-elevated/60 p-3 text-xs'>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                        <span className='h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success' />
                        Auto-mode active
                    </div>
                    <div className='mt-1 font-mono text-[11px] text-muted-foreground'>
                        next sweep · 14m
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className='flex-1'>
                <header className='sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-background/70 px-6 py-4 backdrop-blur-xl'>
                    <div>
                        <div className='font-mono text-xs uppercase tracking-widest text-muted-foreground'>
                            vaultra
                        </div>
                        <h1 className='font-display text-xl font-semibold leading-tight'>
                            {title}
                        </h1>
                        {subtitle && (
                            <p className='text-sm text-muted-foreground'>{subtitle}</p>
                        )}
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className='rounded-full border border-border bg-secondary/50 p-2 text-muted-foreground hover:text-foreground'>
                            <Bell className='h-4 w-4' />
                        </button>
                        <div className='flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm'>
                            <Wallet className='h-3.5 w-3.5 text-primary' />
                            <span className='font-mono text-xs'>treasury.eth</span>
                        </div>
                    </div>
                </header>
                <div className='px-6 py-8'>{children}</div>
            </main>
        </div>
    );
};
