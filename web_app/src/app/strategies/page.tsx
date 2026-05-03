"use client";

import { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Shield, Scale, Rocket } from 'lucide-react';

const modes = [
    { id: 'conservative', name: 'Conservative', icon: Shield, desc: 'Mostly stables. Capital preservation first.', split: 'Stables 70 / ETH 20 / BTC 10' },
    { id: 'balanced', name: 'Balanced', icon: Scale, desc: 'ETH + BTC + stables blend.', split: 'Stables 40 / ETH 30 / BTC 20 / Other 10' },
    { id: 'growth', name: 'Growth', icon: Rocket, desc: 'Higher volatility, higher upside.', split: 'Stables 20 / ETH 40 / BTC 25 / Alts 15' },
];

const Strategies = () => {
    const [mode, setMode] = useState('balanced');
    const [rules, setRules] = useState(
        'Never hold more than 50% stablecoins\nBuy dips over 5%\nMax slippage 1%'
    );
    return (
        <AppLayout title='Strategies' subtitle='Risk profiles and policy rules. Vaultra obeys these, always.'>
            <div className='grid gap-4 md:grid-cols-3'>
                {modes.map((m) => {
                    const active = mode === m.id;
                    return (
                        <button
                            key={m.id}
                            onClick={() => setMode(m.id)}
                            className={`glass rounded-2xl p-5 text-left transition-all ${active ? 'border-primary shadow-glow' : 'hover:border-primary/40'
                                }`}
                        >
                            <div className='flex items-center justify-between'>
                                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary'>
                                    <m.icon className='h-5 w-5' />
                                </div>
                                {active && <span className='font-mono text-[10px] text-primary'>ACTIVE</span>}
                            </div>
                            <div className='mt-4 font-display text-xl font-semibold'>{m.name}</div>
                            <p className='mt-1 text-sm text-muted-foreground'>{m.desc}</p>
                            <div className='mt-3 font-mono text-xs text-muted-foreground'>{m.split}</div>
                        </button>
                    );
                })}
            </div>

            <div className='mt-8 glass rounded-2xl p-6'>
                <h2 className='font-display text-lg font-semibold'>Custom rules</h2>
                <p className='text-sm text-muted-foreground'>Plain English policy. Vaultra parses and enforces.</p>
                <textarea
                    value={rules}
                    onChange={(e) => setRules(e.target.value)}
                    rows={6}
                    className='mt-4 w-full rounded-xl border border-border bg-surface-elevated/50 p-4 font-mono text-sm outline-none focus:border-primary/60'
                />
                <div className='mt-4 flex gap-2'>
                    <Button variant='hero'>Save policy</Button>
                    <Button variant='outline'>Simulate impact</Button>
                </div>
            </div>
        </AppLayout>
    );
};

export default Strategies;
