"use client";

import { AppLayout } from '@/components/AppLayout';
import { Brain, ShieldCheck, TrendingUp, Zap, Cpu } from 'lucide-react';

const agents = [
    { name: 'Planner', icon: Brain, status: 'thinking', desc: 'Generating next-hour treasury plan', load: 64 },
    { name: 'Risk', icon: ShieldCheck, status: 'watching', desc: 'Reviewing exposure & policy limits', load: 22 },
    { name: 'Market', icon: TrendingUp, status: 'scanning', desc: 'Monitoring 18 venues for opportunity', load: 41 },
    { name: 'Executor', icon: Zap, status: 'idle', desc: '0 pending txs · keepers warm', load: 8 },
    { name: 'Memory', icon: Cpu, status: 'learning', desc: 'Updated 3 preferences this hour', load: 17 },
];

const Agents = () => (
    <AppLayout title='Agents' subtitle='The swarm running your treasury, in real time.'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {agents.map((a) => (
                <div key={a.name} className='glass relative overflow-hidden rounded-2xl p-5'>
                    <div className='flex items-start justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow'>
                                <a.icon className='h-5 w-5' />
                            </div>
                            <div>
                                <div className='font-display text-lg font-semibold'>{a.name}</div>
                                <div className='font-mono text-[11px] uppercase text-primary'>{a.status}</div>
                            </div>
                        </div>
                        <span className='h-2 w-2 animate-pulse-glow rounded-full bg-success' />
                    </div>
                    <p className='mt-4 text-sm text-muted-foreground'>{a.desc}</p>
                    <div className='mt-4'>
                        <div className='flex items-center justify-between font-mono text-[11px] text-muted-foreground'>
                            <span>load</span><span>{a.load}%</span>
                        </div>
                        <div className='mt-1 h-1 overflow-hidden rounded-full bg-secondary'>
                            <div className='h-full bg-gradient-primary' style={{ width: `${a.load}%` }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='mt-8 glass rounded-2xl p-6'>
            <h2 className='font-display text-lg font-semibold'>Live decision feed</h2>
            <ul className='mt-4 space-y-2 font-mono text-xs'>
                {[
                    '[Planner] proposed: rebalance +2% ETH',
                    '[Risk] approved: within 30% volatility budget',
                    '[Executor] routing via Uniswap v3 0.05% pool',
                    '[Memory] noted: user prefers slippage ≤ 1%',
                    '[Market] detected: ETH/USD -1.4% in 15m',
                ].map((l, i) => (
                    <li key={i} className='flex gap-3 text-muted-foreground'>
                        <span className='text-primary'>›</span>
                        <span>{l}</span>
                    </li>
                ))}
            </ul>
        </div>
    </AppLayout>
);

export default Agents;
