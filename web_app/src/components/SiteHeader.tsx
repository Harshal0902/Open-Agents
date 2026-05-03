import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const nav = [
    { label: 'How it works', href: '/#how' },
    { label: 'Security', href: '/#security' },
    { label: 'Docs', href: '/#docs' },
];

export const SiteHeader = () => {
    const pathname = usePathname();

    return (
        <header className='fixed top-0 z-50 w-full'>
            <div className='mx-auto mt-4 max-w-6xl px-4'>
                <div className='glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-card'>
                    <Link href='/' aria-label='Vaultra home'>
                        <Logo />
                    </Link>
                    <nav className='hidden items-center gap-1 md:flex'>
                        {nav.map((n) => (
                            <a
                                key={n.label}
                                href={n.href}
                                className={cn(
                                    'rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
                                )}
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>
                    <div className='flex items-center gap-2'>
                        <Button asChild variant='ghost' size='sm' className='hidden rounded-full sm:inline-flex'>
                            <Link href='/dashboard'>Open app</Link>
                        </Button>
                        <Button asChild size='sm' variant='hero' className='rounded-full'>
                            <Link href='/dashboard'>
                                Connect Wallet{' '}
                                <ArrowRight className='ml-1 h-3.5 w-3.5' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
