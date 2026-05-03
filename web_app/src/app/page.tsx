"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, ShieldCheck, Activity, Zap, Sparkles, Network, FileText, Wallet, Eye, Cpu, TrendingUp, Users } from 'lucide-react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { HeroDashboard } from '@/components/HeroDashboard';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const partners = ['Uniswap', 'KeeperHub', 'ENS', '0G', 'Axelar', 'Base', 'Optimism'];

const problems = [
  { t: 'Idle stablecoins', d: 'Capital sitting unused, losing real yield every day.' },
  { t: 'Poor allocations', d: 'No one is rebalancing. Drift compounds quietly.' },
  { t: 'Missed opportunities', d: `Opportunities arrive at 3am. Treasuries don't.` },
  { t: 'Manual execution', d: 'Multisig fatigue. Fat-finger risk. Slow.' },
  { t: 'No audit trail', d: 'Decisions live in DMs, not in a transparent log.' },
];

const agents = [
  { name: 'Planner', icon: Brain, desc: 'Builds treasury strategies aligned to your policy.' },
  { name: 'Trader', icon: TrendingUp, desc: 'Routes the best swap path across DEXs.' },
  { name: 'Executor', icon: Zap, desc: 'Reliably ships txs via KeeperHub keepers.' },
  { name: 'Risk', icon: ShieldCheck, desc: 'Watches exposure, slippage and policy limits.' },
  { name: 'Memory', icon: Cpu, desc: 'Learns your preferences over every decision.' },
];

const features = [
  { name: 'Smart Rebalancing', icon: Activity, desc: 'Drift-aware portfolio rebalancing on your schedule or live triggers.' },
  { name: 'Yield Optimization', icon: TrendingUp, desc: 'Detects idle capital and routes it to vetted, risk-scored venues.' },
  { name: 'Autonomous Execution', icon: Zap, desc: 'KeeperHub-backed execution with retries and gas-aware bundling.' },
  { name: 'ENS Agent Identity', icon: Network, desc: 'Every Vaultra agent ships txs from its own onchain ENS identity.' },
  { name: 'Multi-Agent Consensus', icon: Users, desc: 'Plans must pass Risk + Policy review before any tx fires.' },
  { name: 'Transparent Logs', icon: Eye, desc: 'Every decision and rationale, queryable forever.' },
];

export default function Page() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <SiteHeader />

      <section className='relative pt-40 pb-12'>
        <div
          className='pointer-events-none absolute inset-0 -z-10 opacity-50'
          style={{
            backgroundImage: `url(${heroBg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 75%)',
          }}
        />
        <div className='absolute inset-0 -z-10 grid-bg opacity-50' />

        <div className='mx-auto max-w-6xl px-6 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className='mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl'
          >
            Your Autonomous{' '}
            <span className='text-gradient'>Treasury Team</span>,
            <br /> Onchain.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className='mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg'
          >
            Vaultra monitors idle capital, reallocates assets, executes swaps, and protects
            your treasury strategy <span className='text-foreground'>24/7</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className='mt-9 flex flex-wrap items-center justify-center gap-3'
          >
            <Button asChild variant='hero' size='xl'>
              <Link href='/dashboard'>
                <Wallet className='h-4 w-4' /> Connect Wallet
              </Link>
            </Button>
            <Button asChild variant='glass' size='xl'>
              <Link href='/chat'>
                Watch demo <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </motion.div>

          <HeroDashboard />
        </div>
      </section>

      <section className='relative mt-12 overflow-hidden border-y border-border/50 bg-surface/40 py-6'>
        <div className='flex'>
          <div className='ticker flex shrink-0 items-center gap-14 pr-14'>
            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
              <span key={i} className='font-display text-xl font-medium text-muted-foreground/70'>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id='problem' className='mx-auto max-w-6xl px-6 py-28'>
        <div className='grid gap-12 md:grid-cols-2'>
          <div>
            <span className='font-mono text-xs uppercase tracking-widest text-primary'>The problem</span>
            <h2 className='mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl'>
              Treasuries lose money <br /> every single day.
            </h2>
            <p className='mt-5 max-w-md text-muted-foreground'>
              Most onchain treasuries are managed in spreadsheets and Telegram. Capital drifts.
              Decisions stall. Opportunities evaporate.
            </p>
          </div>
          <ul className='grid gap-3'>
            {problems.map((p) => (
              <li key={p.t} className='glass rounded-2xl p-5'>
                <div className='flex items-baseline justify-between gap-4'>
                  <h3 className='font-medium'>{p.t}</h3>
                  <span className='font-mono text-xs text-muted-foreground'>-</span>
                </div>
                <p className='mt-1 text-sm text-muted-foreground'>{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id='how' className='relative py-28'>
        <div className='absolute inset-0 -z-10 bg-gradient-radial opacity-60' />
        <div className='mx-auto max-w-6xl px-6'>
          <div className='mx-auto max-w-2xl text-center'>
            <span className='font-mono text-xs uppercase tracking-widest text-primary'>How it works</span>
            <h2 className='mt-3 font-display text-4xl font-semibold md:text-5xl'>
              A swarm of agents,
              <br /> one shared policy.
            </h2>
            <p className='mt-5 text-muted-foreground'>
              Vaultra runs a multi-agent loop every minute. Plans must clear Risk and Policy
              review before they ever touch a wallet.
            </p>
          </div>

          <div className='mt-14 grid gap-4 md:grid-cols-5'>
            {agents.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className='glass group relative overflow-hidden rounded-2xl p-5'
              >
                <div className='absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100' />
                <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary'>
                  <a.icon className='h-4 w-4' />
                </div>
                <div className='mt-4 font-display text-lg font-semibold'>{a.name}</div>
                <p className='mt-1 text-sm text-muted-foreground'>{a.desc}</p>
                <div className='mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground'>
                  agent_{String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-28'>
        <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-end'>
          <div className='max-w-xl'>
            <span className='font-mono text-xs uppercase tracking-widest text-primary'>What it does</span>
            <h2 className='mt-3 font-display text-4xl font-semibold md:text-5xl'>
              The treasury OS, fully automated.
            </h2>
          </div>
          <p className='max-w-sm text-muted-foreground'>
            Connect a wallet, set policy, sleep well. Vaultra handles allocation, execution and audit.
          </p>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((f) => (
            <div
              key={f.name}
              className='glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/40'
            >
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow'>
                  <f.icon className='h-5 w-5' />
                </div>
                <h3 className='font-display text-lg font-semibold'>{f.name}</h3>
              </div>
              <p className='mt-3 text-sm text-muted-foreground'>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-28'>
        <div className='grid gap-10 md:grid-cols-2 md:items-center'>
          <div>
            <span className='font-mono text-xs uppercase tracking-widest text-primary'>Talk to your treasury</span>
            <h2 className='mt-3 font-display text-4xl font-semibold md:text-5xl'>
              Just say what you want.
            </h2>
            <p className='mt-5 text-muted-foreground'>
              No dashboards required. Vaultra speaks plain English, ships onchain Solidity.
            </p>
            <div className='mt-6 flex gap-3'>
              <Button asChild variant='hero'>
                <Link href='/chat'>Open chat <ArrowRight className='h-4 w-4' /></Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='/dashboard'>View dashboard</Link>
              </Button>
            </div>
          </div>
          <div className='glass-strong rounded-3xl p-5 shadow-elevated'>
            <div className='space-y-3 font-mono text-sm'>
              <div className='rounded-2xl bg-secondary/60 p-3'>
                <div className='text-[10px] uppercase tracking-wider text-muted-foreground'>you</div>
                <div className='mt-1 text-foreground'>Keep me safe if the market dumps.</div>
              </div>
              <div className='rounded-2xl border border-primary/30 bg-primary/5 p-3'>
                <div className='flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-primary'>
                  <Sparkles className='h-3 w-3' /> vaultra
                </div>
                <div className='mt-1 text-foreground'>Rule created.</div>
                <ul className='mt-2 space-y-1 text-muted-foreground'>
                  <li>→ Watch ETH 1h drawdown &gt; 5%</li>
                  <li>→ Auto-shift 15% to USDC</li>
                  <li>→ Pause new buys for 6h</li>
                </ul>
                <div className='mt-2 text-[11px] text-success'>policy passed risk review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-5xl px-6 py-28'>
        <div className='glass-strong relative overflow-hidden rounded-3xl p-12 text-center shadow-elevated'>
          <div className='absolute inset-0 -z-10 bg-gradient-radial opacity-80' />
          <FileText className='mx-auto h-6 w-6 text-primary' />
          <h2 className='mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold md:text-5xl'>
            Let your capital work
            <br /> while you sleep.
          </h2>
          <p className='mx-auto mt-4 max-w-md text-muted-foreground'>
            Connect your wallet. Set your policy. Vaultra does the rest.
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <Button asChild variant='hero' size='xl'>
              <Link href='/dashboard'><Wallet className='h-4 w-4' /> Connect Wallet</Link>
            </Button>
            <Button asChild variant='glass' size='xl'>
              <Link href='/chat'>Try the agent</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
