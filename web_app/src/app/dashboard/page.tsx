/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { AppLayout } from '@/components/AppLayout';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart as RPieChart, Pie, Cell } from 'recharts';
import { ArrowDownRight, ArrowUpRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const perfData = Array.from({ length: 30 }).map((_, i) => ({
    d: i,
    v: 40000 + Math.round(Math.sin(i / 3) * 2500 + i * 420 + Math.random() * 800),
}));

const allocation = [
    { name: 'USDC', value: 48, color: 'hsl(152 76% 50%)' },
    { name: 'ETH', value: 32, color: 'hsl(190 90% 55%)' },
    { name: 'BTC', value: 14, color: 'hsl(40 95% 60%)' },
    { name: 'Other', value: 6, color: 'hsl(280 60% 60%)' },
];

const Stat = ({ label, value, delta, positive = true, mono }: { label: string; value: string; delta?: string; positive?: boolean; mono?: boolean }) => (
    <div className='glass rounded-2xl p-5'>
        <div className='text-xs uppercase tracking-wider text-muted-foreground'>{label}</div>
        <div className={`mt-2 font-display text-3xl font-semibold ${mono ? 'font-mono' : ''}`}>{value}</div>
        {delta && (
            <div className={`mt-1 inline-flex items-center gap-1 text-xs ${positive ? 'text-success' : 'text-danger'}`}>
                {positive ? <ArrowUpRight className='h-3 w-3' /> : <ArrowDownRight className='h-3 w-3' />}
                {delta}
            </div>
        )}
    </div>
);

const Dashboard = () => {
    return (
        <AppLayout title='Dashboard' subtitle='Live treasury health, allocation and AI suggestions.'>
            <div className='grid gap-4 md:grid-cols-4'>
                <Stat label='Total Treasury' value='$52,340' delta='+2.4% 24h' />
                <Stat label='Idle Capital' value='$18,200' delta='35% of total' positive={false} />
                <Stat label='Deployed' value='$34,140' delta='+$1,210 today' />
                <Stat label='Risk Score' value='Low' delta='Conservative policy' />
            </div>

            <div className='mt-6 grid gap-4 lg:grid-cols-3'>
                <div className='glass rounded-2xl p-5 lg:col-span-2'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className='font-display text-lg font-semibold'>Portfolio performance</h2>
                            <p className='text-xs text-muted-foreground'>30-day equity curve</p>
                        </div>
                        <div className='flex gap-1 rounded-full border border-border p-1 text-xs text-muted-foreground'>
                            {['7D', '30D', '90D', 'All'].map((t) => (
                                <button key={t} className={`rounded-full px-3 py-1 ${t === '30D' ? 'bg-primary/15 text-primary' : ''}`}>{t}</button>
                            ))}
                        </div>
                    </div>
                    <div className='mt-4 h-64'>
                        <ResponsiveContainer>
                            <AreaChart data={perfData} margin={{ left: -10, right: 10, top: 10 }}>
                                <defs>
                                    <linearGradient id='g' x1='0' x2='0' y1='0' y2='1'>
                                        <stop offset='0%' stopColor='hsl(152 76% 50%)' stopOpacity={0.5} />
                                        <stop offset='100%' stopColor='hsl(152 76% 50%)' stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey='d' hide />
                                <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                                <Tooltip
                                    contentStyle={{
                                        background: 'hsl(var(--surface-elevated))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: 12,
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: 12,
                                    }}
                                    labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
                                    // @ts-expect-error
                                    formatter={(v: number) => [`$${v.toLocaleString()}`, 'value']}
                                />
                                <Area type='monotone' dataKey='v' stroke='hsl(152 76% 50%)' strokeWidth={2} fill='url(#g)' />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='glass rounded-2xl p-5'>
                    <h2 className='font-display text-lg font-semibold'>Allocation</h2>
                    <p className='text-xs text-muted-foreground'>Current vs target</p>
                    <div className='mt-2 h-48'>
                        <ResponsiveContainer>
                            <RPieChart>
                                <Pie data={allocation} dataKey='value' innerRadius={50} outerRadius={75} paddingAngle={3} stroke='none'>
                                    {allocation.map((a) => (<Cell key={a.name} fill={a.color} />))}
                                </Pie>
                            </RPieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='mt-2 space-y-1.5 font-mono text-xs'>
                        {allocation.map((a) => (
                            <div key={a.name} className='flex items-center justify-between'>
                                <span className='flex items-center gap-2'>
                                    <span className='h-2 w-2 rounded-full' style={{ background: a.color }} />
                                    {a.name}
                                </span>
                                <span>{a.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-6 grid gap-4 lg:grid-cols-2'>
                <div className='glass rounded-2xl p-5'>
                    <div className='flex items-center gap-2 text-primary'>
                        <Sparkles className='h-4 w-4' />
                        <h2 className='font-display text-lg font-semibold text-foreground'>Suggested actions</h2>
                    </div>
                    <ul className='mt-4 space-y-3'>
                        {[
                            { t: 'Rebalance to target allocation', d: 'USDC +8% over target. Move ~$2,000 → ETH.', c: '87%' },
                            { t: 'Deploy idle USDC', d: '$4,200 above policy. Route to Aave v3 USDC pool.', c: '74%' },
                            { t: 'Reduce volatility exposure', d: 'Move 5% ETH → USDC ahead of FOMC.', c: '61%' },
                        ].map((s) => (
                            <li key={s.t} className='flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-surface-elevated/50 p-4'>
                                <div>
                                    <div className='font-medium'>{s.t}</div>
                                    <div className='text-sm text-muted-foreground'>{s.d}</div>
                                </div>
                                <div className='text-right'>
                                    <div className='font-mono text-xs text-muted-foreground'>conf {s.c}</div>
                                    <Button size='sm' variant='hero' className='mt-2 rounded-full'>Approve</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='glass rounded-2xl p-5'>
                    <div className='flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        <h2 className='font-display text-lg font-semibold'>Recent actions</h2>
                    </div>
                    <ul className='mt-4 divide-y divide-border/60 font-mono text-sm'>
                        {[
                            { t: 'Swapped 500 USDC → 0.183 ETH', x: 'Uniswap v3', a: '2m ago', ok: true },
                            { t: 'Rebalanced 10% to target', x: 'Planner', a: '1h ago', ok: true },
                            { t: 'Deployed 2,000 USDC → Aave', x: 'Yield agent', a: '5h ago', ok: true },
                            { t: 'Gas saved via KeeperHub', x: 'Executor', a: '8h ago', ok: true },
                            { t: 'Tx retried after revert', x: 'Executor', a: '1d ago', ok: false },
                        ].map((r, i) => (
                            <li key={i} className='flex items-center justify-between py-3'>
                                <div>
                                    <div className='text-foreground'>{r.t}</div>
                                    <div className='text-xs text-muted-foreground'>{r.x}</div>
                                </div>
                                <div className='text-right'>
                                    <div className={`text-xs ${r.ok ? 'text-success' : 'text-warning'}`}>{r.ok ? 'EXECUTED' : 'RETRIED'}</div>
                                    <div className='text-xs text-muted-foreground'>{r.a}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
