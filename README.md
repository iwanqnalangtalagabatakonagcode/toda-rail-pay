# TODA Rail Pay

A cooperative treasury rail for TODA drivers to collect dues, record savings, and release member payouts on Stellar.

Former project name: Tricycle Driver Cooperative Banking

## Problem

Driver cooperatives commonly track dues, emergency loans, and maintenance funds in notebooks. TODA Rail Pay gives them wallet-based collection, transparent pooled balances, and auditable payout approvals.

## How It Works

1. A user connects a Freighter wallet on Stellar testnet.
2. The app opens a route pool in a Soroban Rust contract.
3. Funds move into the contract using the Stellar XLM SAC token interface.
4. A verifier records the project-specific score and status.
5. The contract releases payment to the approved recipient and leaves an auditable event trail.

## How It Uses Stellar

- Stellar testnet for fast, low-cost payment settlement.
- Freighter wallet for user-controlled signing.
- Soroban Rust smart contract for cooperative dues and member payout rail.
- XLM SAC for live testnet escrow transfers.
- Soroban RPC for simulation, submission, and finality.
- Express API exposes an x402-style payment quote route.
- Stellar Wallets Kit is the expansion path for Freighter, xBull, and LOBSTR access beyond the current Freighter-first prototype.

## Track

Track 2 Financial Inclusion & Everyday Payments

## Tech Stack

- Framework: Next.js 15 + React 19 + TypeScript
- Backend: Express + TypeScript
- Database: Prisma + SQLite
- Smart contract: Rust + Soroban SDK
- Stellar SDK: @stellar/stellar-sdk
- Wallet: Freighter
- Network: Stellar testnet

## Rust Contract API

- `open_route_pool(id, owner, target)`
- `collect_driver_due(id, from, amount)`
- `approve_member_case(id, score, status)`
- `release_member_fund(id, to, amount)`
- `get_record(id)`
- `total_locked()`

## Setup & Run

```bash
git clone https://github.com/iwanqnalangtalagabatakonagcode/toda-rail-pay.git
cd toda-rail-pay
npm install
npm run db:generate
npm --workspace backend run db:migrate
npm run db:seed
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:4000

## Contract

```bash
cd contract
cargo test
stellar contract build
```

Deploy after building:

```bash
stellar contract deploy --wasm target/wasm32v1-none/release/toda_rail_pay_contract.wasm --source alice --network testnet -- --admin alice --asset CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC --project_name "TODA Rail Pay"
```

## Network Details

- Network: Stellar testnet
- RPC URL: https://soroban-testnet.stellar.org
- Horizon URL: https://horizon-testnet.stellar.org
- XLM SAC: CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC
- USDC SAC: CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA
- Contract ID: CDLI5WYTSCIZKQBFH3AAGDTSFRNLOSBSFEQEQRE473WVTVJFEAW6PG4Y

## Docs

- docs/Submission_Guideliness.md
- docs/stellar-fullstack-cheatsheet.md
- docs/dev_setup.md
- docs/contract.md
- docs/api.md

## Originality

This is original StellarX Philippines hackathon work. It uses open-source Stellar SDKs, Soroban Rust SDK, AI-assisted development, and disclosed ecosystem integration paths. It is not a barely modified template.

## Team

- loaferss - @iwanqnalangtalagabatakonagcode

## License

MIT
