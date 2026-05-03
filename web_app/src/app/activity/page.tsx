"use client";

import { AppLayout } from '@/components/AppLayout';
import { CheckCircle2, AlertTriangle, RefreshCw, TrendingUp, Settings as SetIcon } from 'lucide-react';

const events = [
    { t: '10:42', d: 'Strategy updated', x: 'Risk policy → Conservative+', icon: SetIcon, tone: 'muted' },
    { t: '10:30', d: 'Trade executed', x: 'Swapped 500 USDC → 0.183 ETH (Uniswap v3)', icon: CheckCircle2, tone: 'success' },
    { t: '09:55', d: 'Profit captured', x: 'Took +$120 profit on ETH leg', icon: TrendingUp, tone: 'success' },
    { t: '08:12', d: 'Failed tx retried', x: 'Slippage exceeded, re-quoted via Axelar route', icon: RefreshCw, tone: 'warning' },
    { t: '07:00', d: 'Market alert triggered', x: 'ETH 1h drawdown 4.7% → pre-emptive de-risking armed', icon: AlertTriangle, tone: 'warning' },
    { t: 'Yesterday', d: 'Idle capital deployed', x: '$2,000 USDC → Aave v3 USDC pool', icon: CheckCircle2, tone: 'success' },
];

const toneClass = (t: string) =>
    t === 'success' ? 'text-success bg-success/10' :
        t === 'warning' ? 'text-warning bg-warning/10' :
            'text-muted-foreground bg-secondary';

const Activity = () => (
    <AppLayout title='Activity' subtitle='Every decision, plan, and onchain action - fully transparent.'>
        <div className='glass rounded-2xl p-6'>
            <ol className='relative space-y-6 border-l border-border/60 pl-6'>
                {events.map((e, i) => (
                    <li key={i} className='relative'>
                        <span className={`absolute -left-8.5 flex h-7 w-7 items-center justify-center rounded-full ${toneClass(e.tone)}`}>
                            <e.icon className='h-3.5 w-3.5' />
                        </span>
                        <div className='flex items-baseline justify-between gap-4'>
                            <h3 className='font-medium'>{e.d}</h3>
                            <span className='font-mono text-xs text-muted-foreground'>{e.t}</span>
                        </div>
                        <p className='mt-1 text-sm text-muted-foreground'>{e.x}</p>
                    </li>
                ))}
            </ol>
        </div>
    </AppLayout>
);

export default Activity;
