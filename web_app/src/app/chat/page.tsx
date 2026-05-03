"use client";

import { useState, useRef, useEffect } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Send, Sparkles, User, CheckCircle2 } from 'lucide-react';

type Msg = { role: 'user' | 'agent'; content: string; plan?: { steps: string[]; uplift: string } };

const seed: Msg[] = [
    {
        role: 'agent',
        content:
            `Hi - I'm Vaultra. I can rebalance, deploy idle capital, or set rules. What's on your mind?`,
    },
];

const suggestions = [
    'Keep 40% stable, medium risk.',
    'Optimize idle funds.',
    'Swap 300 USDC to ETH if price dips 3%.',
    'Why did you sell SOL?',
];

const Chat = () => {
    const [messages, setMessages] = useState<Msg[]>(seed);
    const [input, setInput] = useState('');
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

    const send = (text: string) => {
        if (!text.trim()) return;
        const next: Msg[] = [...messages, { role: 'user', content: text }];
        setMessages(next);
        setInput('');
        setTimeout(() => {
            setMessages((m) => [
                ...m,
                {
                    role: 'agent',
                    content:
                        'Detected 62% stablecoin allocation. Idle capital exceeds target by $4,200. Recommended plan:',
                    plan: {
                        steps: ['Swap $2,000 USDC → ETH', 'Keep $1,000 reserve', 'Deploy $1,200 to Aave USDC pool'],
                        uplift: '+8.4% est. annual',
                    },
                },
            ]);
        }, 600);
    };

    return (
        <AppLayout title='Chat' subtitle='Talk to Vaultra. It plans, simulates and executes.'>
            <div className='mx-auto flex h-[calc(100vh-12rem)] max-w-3xl flex-col'>
                <div className='flex-1 space-y-4 overflow-y-auto pb-6 pr-1'>
                    {messages.map((m, i) => (
                        <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                            {m.role === 'agent' && (
                                <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow'>
                                    <Sparkles className='h-4 w-4' />
                                </div>
                            )}
                            <div className={`max-w-[80%] rounded-2xl p-4 ${m.role === 'user'
                                ? 'bg-primary/15 text-foreground'
                                : 'glass'
                                }`}>
                                <div className='text-sm'>{m.content}</div>
                                {m.plan && (
                                    <div className='mt-3 rounded-xl border border-primary/30 bg-primary/5 p-3 font-mono text-xs'>
                                        {m.plan.steps.map((s, idx) => (
                                            <div key={idx} className='flex items-center gap-2 py-0.5'>
                                                <CheckCircle2 className='h-3 w-3 text-primary' />
                                                {s}
                                            </div>
                                        ))}
                                        <div className='mt-2 text-success'>{m.plan.uplift}</div>
                                        <div className='mt-3 flex gap-2'>
                                            <Button size='sm' variant='hero' className='rounded-full'>Approve plan</Button>
                                            <Button size='sm' variant='outline' className='rounded-full'>Simulate</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {m.role === 'user' && (
                                <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-secondary'>
                                    <User className='h-4 w-4 text-muted-foreground' />
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={endRef} />
                </div>

                <div className='space-y-3'>
                    <div className='flex flex-wrap gap-2'>
                        {suggestions.map((s) => (
                            <button
                                key={s}
                                onClick={() => send(s)}
                                className='rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground hover:text-foreground'
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <form
                        onSubmit={(e) => { e.preventDefault(); send(input); }}
                        className='glass flex items-center gap-2 rounded-2xl p-2'
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Tell Vaultra what to do…'
                            className='flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground'
                        />
                        <Button type='submit' variant='hero' size='icon' className='rounded-xl'>
                            <Send className='h-4 w-4' />
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};

export default Chat;
