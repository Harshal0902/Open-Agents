"use client";

import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Wallet } from 'lucide-react';

const rows = [
    { a: 'USDC', amt: '12,000', val: '$12,000', t: '40%', d: '+8%', positive: false },
    { a: 'ETH', amt: '4.2', val: '$14,000', t: '35%', d: '-6%', positive: true },
    { a: 'BTC', amt: '0.21', val: '$13,800', t: '20%', d: '-2%', positive: true },
    { a: 'ARB', amt: '1,800', val: '$2,540', t: '5%', d: '+1%', positive: false },
];

const Portfolio = () => (
    <AppLayout title='Portfolio' subtitle='Positions, targets and drift.'>
        <div className='mb-6 flex flex-wrap gap-2'>
            <Button variant='hero'><RefreshCw className='h-4 w-4' /> Rebalance now</Button>
            <Button variant='outline'><Download className='h-4 w-4' /> Export CSV</Button>
            <Button variant='outline'><Wallet className='h-4 w-4' /> View wallets</Button>
        </div>
        <div className='glass overflow-hidden rounded-2xl'>
            <table className='w-full text-sm'>
                <thead className='bg-surface-elevated/40 text-xs uppercase tracking-wider text-muted-foreground'>
                    <tr>
                        <th className='px-6 py-3 text-left'>Asset</th>
                        <th className='px-6 py-3 text-right'>Amount</th>
                        <th className='px-6 py-3 text-right'>Value</th>
                        <th className='px-6 py-3 text-right'>Target</th>
                        <th className='px-6 py-3 text-right'>Δ Drift</th>
                    </tr>
                </thead>
                <tbody className='font-mono'>
                    {rows.map((r) => (
                        <tr key={r.a} className='border-t border-border/50'>
                            <td className='px-6 py-4 font-display text-base'>{r.a}</td>
                            <td className='px-6 py-4 text-right'>{r.amt}</td>
                            <td className='px-6 py-4 text-right'>{r.val}</td>
                            <td className='px-6 py-4 text-right text-muted-foreground'>{r.t}</td>
                            <td className={`px-6 py-4 text-right ${r.positive ? 'text-success' : 'text-warning'}`}>{r.d}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </AppLayout>
);

export default Portfolio;
