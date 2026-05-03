import { Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Logo = ({ className, showWord = true }: { className?: string; showWord?: boolean }) => (
    <div className={cn('flex items-center gap-2', className)}>
        <div className='relative'>
            <div className='absolute inset-0 rounded-lg bg-primary/40 blur-md' />
            <div className='relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow'>
                <Hexagon className='h-4 w-4 text-primary-foreground' strokeWidth={2.5} fill='currentColor' />
            </div>
        </div>
        {showWord && (
            <span className='font-display text-lg font-semibold tracking-tight'>
                Vaultra
            </span>
        )}
    </div>
);
