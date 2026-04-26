# Vaultra

> Capital That Thinks.

Vaultra is an autonomous onchain treasury agent that helps individuals, DAOs, startups, and onchain organizations manage idle capital intelligently.

It monitors treasury balances, analyzes portfolio allocations, proposes strategy changes, executes swaps, and maintains transparent logs - all through an AI-powered interface.

Built for the **Open Agents Hackathon**.

# Overview

Managing treasury capital manually is slow, inefficient, and reactive.

Funds often sit idle in stablecoins, portfolios drift from target allocations, opportunities are missed, and execution remains fragmented across wallets and protocols.

Vaultra solves this by becoming your autonomous treasury team.

## Vaultra can:

- Detect idle capital
- Monitor allocations in real-time
- Suggest portfolio rebalancing
- Execute swaps onchain
- Adapt to user risk preferences
- Maintain execution history
- Operate continuously as an AI treasury agent

# Core Features

## Autonomous Treasury Management

Vaultra continuously evaluates treasury health and proposes actions to optimize capital efficiency.

## AI Chat Interface

Users interact naturally:

```txt
Keep 40% in stablecoins and medium risk.
Optimize idle funds.
Rebalance portfolio now.
Reduce volatility exposure.
```

## Smart Rebalancing

Automatically restore target allocations when assets drift.

## Onchain Execution

Swaps and treasury actions executed through integrated infrastructure.

## Persistent Memory

Vaultra learns user preferences over time and improves future decisions.

## Full Transparency

Every recommendation and execution is logged.

# Sponsor Integrations

## 0G

Used for:

- Persistent memory storage
- Agent state
- Historical decisions
- Long-term treasury intelligence

## Uniswap

Used for:

- Asset swaps
- Rebalancing execution
- Treasury movement across assets

## KeeperHub

Used for:

- Reliable transaction execution
- Retry logic
- Gas optimization
- Auditable execution layer

## ENS

Used for:

- Human-readable treasury agent identity

Example:

```txt
vaultra.eth
treasuryagent.eth
```

## Gensyn AXL

Used for:

- Multi-agent communication
- Planner ↔ Risk ↔ Executor coordination

---

# Agent Architecture

Vaultra uses a modular agent system.

## Planner Agent

Creates treasury strategies.

## Risk Agent

Measures volatility, concentration, and downside risk.

## Market Agent

Scans for rebalancing opportunities.

## Executor Agent

Performs onchain transactions.

## Memory Agent

Stores user preferences and historical decisions.

# User Flow

## Onboarding

1. Connect wallet
2. Detect treasury assets
3. Choose risk profile
4. Set treasury goals
5. Vaultra creates initial strategy

## Daily Use

Vaultra detects idle capital:

```txt
$4,200 USDC underutilized.
Suggested action: Allocate 20% to ETH.
```

User can:

- Approve manually
- Enable auto mode
- Modify strategy

## Continuous Automation

Vaultra regularly:

- checks balances
- evaluates allocations
- scans markets
- triggers rules
- updates memory
- logs actions

# Example Interaction

## User

```txt
Keep me protected if market drops.
```

## Vaultra

```txt
Rule created:

If ETH drops >8% in 24h:
- Move 15% portfolio to stablecoins
- Pause aggressive buys
- Notify treasury owner
```

# Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- Node.js
- API Routes

## AI Layer

- LLM orchestration
- Agent planning system

## Web3

- wagmi
- viem
- ethers.js

## Infra

- Vercel
- 0G
- Uniswap
- KeeperHub
