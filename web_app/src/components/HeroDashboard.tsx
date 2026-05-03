import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Wallet, TrendingUp, ShieldCheck } from 'lucide-react';

const Bar = ({ pct, color }: { pct: number; color: string }) => (
    <div className='h-1.5 w-full overflow-hidden rounded-full bg-secondary'>
        <div className='h-full rounded-full' style={{ width: `${pct}%`, background: color }} />
    </div>
);

export const HeroDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative mx-auto mt-20 w-full max-w-5xl'
        >
            <div className='absolute -inset-8 -z-10 bg-gradient-primary opacity-20 blur-3xl' />
            <div className='glass-strong rounded-3xl p-3 shadow-elevated'>
                <div className='rounded-2xl bg-surface/60 p-5'>
                    <div className='flex items-center justify-between border-b border-border/60 pb-4'>
                        <div className='flex items-center gap-2'>
                            <div className='h-2.5 w-2.5 rounded-full bg-danger/80' />
                            <div className='h-2.5 w-2.5 rounded-full bg-warning/80' />
                            <div className='h-2.5 w-2.5 rounded-full bg-success/80' />
                            <span className='ml-3 font-mono text-xs text-muted-foreground'>vaultra.app/dashboard</span>
                        </div>
                        <span className='hidden font-mono text-xs text-muted-foreground sm:inline'>treasury.eth · base</span>
                    </div>

                    <div className='grid gap-4 pt-5 md:grid-cols-3'>
                        {[
                            { label: 'Treasury Value', value: '$52,340', delta: '+2.4%', icon: Wallet },
                            { label: 'Idle Capital', value: '$18,200', delta: '35% of total', icon: TrendingUp },
                            { label: 'Risk Score', value: 'Low', delta: 'Conservative', icon: ShieldCheck },
                        ].map((c) => (
                            <div key={c.label} className='rounded-xl border border-border/60 bg-surface-elevated/50 p-4'>
                                <div className='flex items-center justify-between text-xs text-muted-foreground'>
                                    <span>{c.label}</span>
                                    <c.icon className='h-3.5 w-3.5' />
                                </div>
                                <div className='mt-2 font-display text-2xl font-semibold'>{c.value}</div>
                                <div className='mt-1 text-xs text-success'>{c.delta}</div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-4 grid gap-4 md:grid-cols-5'>
                        <div className='md:col-span-3 rounded-xl border border-border/60 bg-surface-elevated/50 p-4'>
                            <div className='mb-3 flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Sparkles className='h-4 w-4 text-primary' />
                                    <span className='text-sm font-medium'>Suggested Action</span>
                                </div>
                                <span className='font-mono text-[11px] text-muted-foreground'>confidence 87%</span>
                            </div>
                            <p className='text-sm text-muted-foreground'>
                                Move <span className='font-mono text-foreground'>20% USDC</span> →{' '}
                                <span className='font-mono text-foreground'>ETH</span>. Idle balance exceeds policy by{' '}
                                <span className='text-foreground'>$4,200</span>. Estimated annual uplift{' '}
                                <span className='text-success'>+8.4%</span>.
                            </p>
                            <div className='mt-4 flex gap-2'>
                                <button className='rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-glow'>
                                    Approve plan
                                </button>
                                <button className='rounded-full border border-border bg-transparent px-4 py-1.5 text-xs text-muted-foreground hover:text-foreground'>
                                    Simulate
                                </button>
                            </div>
                        </div>
                        <div className='md:col-span-2 rounded-xl border border-border/60 bg-surface-elevated/50 p-4'>
                            <div className='text-sm font-medium'>Allocation</div>
                            <div className='mt-3 space-y-3 font-mono text-xs'>
                                {[
                                    { k: 'USDC', v: 48, c: 'hsl(152 76% 50%)' },
                                    { k: 'ETH', v: 32, c: 'hsl(190 90% 55%)' },
                                    { k: 'BTC', v: 14, c: 'hsl(40 95% 60%)' },
                                    { k: 'Other', v: 6, c: 'hsl(280 60% 60%)' },
                                ].map((r) => (
                                    <div key={r.k}>
                                        <div className='mb-1 flex justify-between'>
                                            <span className='text-muted-foreground'>{r.k}</span>
                                            <span>{r.v}%</span>
                                        </div>
                                        <Bar pct={r.v} color={r.c} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-border/60 bg-surface-elevated/50 p-3 text-xs text-muted-foreground'>
                        <span className='rounded-full bg-success/15 px-2 py-0.5 font-mono text-success'>EXECUTED</span>
                        <span>Swapped 500 USDC → 0.183 ETH via Uniswap</span>
                        <ArrowUpRight className='ml-auto h-3.5 w-3.5' />
                        <span className='font-mono'>2m ago</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
