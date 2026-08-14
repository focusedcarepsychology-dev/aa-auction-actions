# AA Auction Actions

AI-powered auction arbitrage operating system.

**Trading/project name:** AA Auction Actions  
**Current account/legal identity where required:** Paradoxicapplay  
**Goal:** maximise realised net profit while minimising capital tied up, holding time and downside risk.

## Operating loop

Discover → Identify → Value → Approve → Buy → Detect win/invoice → Route exit → Sell → Direct ship → Record profit → Learn

## Safety and control rules

- Human approval remains required for purchases/bids unless an official platform API and explicit account permission later allow otherwise.
- Never exceed the calculated hard maximum bid.
- Prefer opportunities with ≥ €300 expected net profit or ≥ 100% ROI.
- Prefer “free-roll” bundles where one identifiable component covers most or all landed cost.
- Verify the actual listing is live before recommending action.
- Use realised sold evidence or firm buyback quotes before active asking prices.
- Never store platform passwords, card details or secrets in this repository.

## MVP

This repository contains the first operational console for deal tracking, bid limits, inventory, resale routing and profit calculation. The existing hourly Undervalued Item Watch acts as the acquisition scanner. Email win/invoice detection and marketplace integrations are added as connectors become available.
