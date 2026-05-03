import { Logo } from './Logo';

export const Footer = () => (
    <footer className='border-t border-border/50 mt-32'>
        <div className='mx-auto max-w-6xl px-6 py-12'>
            <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
                <div>
                    <Logo />
                    <p className='mt-3 max-w-sm text-sm text-muted-foreground'>
                        Capital that thinks. Vaultra is your autonomous treasury team, working onchain 24/7.
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-x-10 gap-y-2 text-sm'>
                    {['Docs', 'GitHub', 'X / Twitter', 'Terms', 'Privacy', 'Contact'].map((l) => (
                        <a key={l} href='#' className='text-muted-foreground hover:text-foreground'>{l}</a>
                    ))}
                </div>
            </div>
            <div className='mt-10 flex items-center justify-between border-t border-border/50 pt-6 text-xs text-muted-foreground'>
                <span>© {new Date().getFullYear()} Vaultra Labs</span>
                <span className='font-mono'>v0.1.0 · mainnet</span>
            </div>
        </div>
    </footer>
);
