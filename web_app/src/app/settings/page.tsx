"use client";

import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Wallet, Globe, Bell } from 'lucide-react';

const Row = ({ label, desc, children }: { label: string; desc: string; children: React.ReactNode }) => (
    <div className='flex items-center justify-between gap-6 border-b border-border/50 py-4 last:border-0'>
        <div>
            <div className='font-medium'>{label}</div>
            <div className='text-sm text-muted-foreground'>{desc}</div>
        </div>
        <div>{children}</div>
    </div>
);

const Settings = () => (
    <AppLayout title='Settings' subtitle='Wallets, identity and notifications.'>
        <div className='grid gap-6 lg:grid-cols-2'>
            <div className='glass rounded-2xl p-6'>
                <div className='mb-2 flex items-center gap-2'>
                    <Wallet className='h-4 w-4 text-primary' />
                    <h2 className='font-display text-lg font-semibold'>Wallets</h2>
                </div>
                <Row label='Primary treasury' desc='treasury.eth · 0x12…fA9b'>
                    <Button size='sm' variant='outline'>Manage</Button>
                </Row>
                <Row label='Operations' desc='ops.vaultra.eth · 0x4d…22Ee'>
                    <Button size='sm' variant='outline'>Manage</Button>
                </Row>
                <Row label='Connect new' desc='Add another safe or EOA'>
                    <Button size='sm' variant='hero'>Connect</Button>
                </Row>
            </div>

            <div className='glass rounded-2xl p-6'>
                <div className='mb-2 flex items-center gap-2'>
                    <Globe className='h-4 w-4 text-primary' />
                    <h2 className='font-display text-lg font-semibold'>Agent identity</h2>
                </div>
                <Row label='ENS subdomain' desc='planner.vaultra.eth'><span className='font-mono text-xs text-success'>ACTIVE</span></Row>
                <Row label='Auto-mode' desc='Execute approved plans automatically'><Switch defaultChecked /></Row>
                <Row label='Require multi-agent consensus' desc='Risk + Policy must approve'><Switch defaultChecked /></Row>
            </div>

            <div className='glass rounded-2xl p-6 lg:col-span-2'>
                <div className='mb-2 flex items-center gap-2'>
                    <Bell className='h-4 w-4 text-primary' />
                    <h2 className='font-display text-lg font-semibold'>Notifications</h2>
                </div>
                <Row label='Trade executions' desc='Notify on every onchain action'><Switch defaultChecked /></Row>
                <Row label='Risk alerts' desc='Drawdowns, slippage spikes, oracle anomalies'><Switch defaultChecked /></Row>
                <Row label='Weekly digest' desc='Summary of treasury performance'><Switch /></Row>
            </div>
        </div>
    </AppLayout>
);

export default Settings;
