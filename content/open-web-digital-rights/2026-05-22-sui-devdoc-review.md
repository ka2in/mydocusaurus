---
slug: open-web-digital-rights/sui-developer-documentation-review
title: 'Sui Developer Documentation Review — Onboarding, Move, and the Architecture of Learning'
authors: 
    name: Faycal Alami-Hassani
    title: Founder of Farowave
    url: https://github.com/ka2in
    image_url: https://github.com/ka2in.png
tags: [open-web, web3, documentation-review, sui, move]
date: 2026-05-22
---

# Sui Developer Documentation Review: Onboarding, Move, and the Architecture of Learning

**Scope of this review:** The Getting Started section, the developer onboarding flow through "Hello, World!" and the Connect a Frontend guides, the conceptual introduction to Move and Sui's object model, and the overall information architecture of [docs.sui.io](https://docs.sui.io). Documentation reviewed in May 2026 against the current published version.

**What this review is not:** An evaluation of Sui as a technology, an investment opinion, or a comparison of protocol economics. The focus is how the documentation communicates — whether it teaches, whether it respects the reader's time, and whether it builds understanding before demanding technical work.

---

## Why Sui's Documentation Matters More Than Most

Sui represents a genuine architectural departure from the dominant blockchain paradigm. It introduces a novel object-centric model, a programming language — Move — designed from the ground up for asset ownership, and a parallel transaction execution model that requires developers to unlearn assumptions about how blockchains handle state.

This is not a documentation challenge that comes from complexity alone. It's a challenge that comes from novelty. When developers arrive at docs.sui.io, they typically bring mental models from Ethereum, Solidity, or traditional web development. The documentation's job is not just to explain Sui — it's to replace an existing mental model with a better one, without losing the developer along the way.

That is a harder problem than most documentation teams acknowledge. Sui's team has tackled it with visible effort and partial success.

---

## The Developer's First 30 Minutes

Opening docs.sui.io, the entry point is immediately clear. The Getting Started section is front and centre. A developer arriving with the intent to build will know where to go within seconds — this is not a given across the web3 documentation landscape, and Sui earns genuine credit for it.

The first substantive task — installing the Sui CLI and configuring a client — is where the first friction appears.
The documentation instructs the developer to run `sui client` and expect a setup prompt. For developers with a previous Sui installation, the command instead returns a help screen listing available subcommands. 

The documentation does acknowledge this — an info callout explains that an existing `client.yaml` triggers the help output and offers a resolution — but the callout is supplementary rather than part of the main instruction flow. A developer reading linearly may not register it before hitting the discrepancy.

The conditional logic here — "if you have an existing config, you'll see this; if you don't, you'll see that" — belongs in the main instruction body, not in a secondary callout. First-time setup is not the right moment to bury a critical branching condition in supplementary text. A developer who sees the help screen instead of the expected prompt has already lost the thread before reaching the explanation that would have oriented them.

After the correct command, the experience improves significantly. The generated keypair, recovery phrase, and environment confirmation are presented cleanly. The `client.yaml` configuration file is referenced but its parameters are not explained inline — a developer who opens the file will find fields like alias, rpc, ws, basic_auth, and chain_id without definitions. The documentation points to the file without explaining what it contains, leaving developers to infer the meaning of each parameter from context or seek answers elsewhere.

Below is a description of the individual parameters listed under each network entry (for example, testnet) in the client.yaml configuration file for Sui:

| Parameter | Meaning |
|-----------|---------|
| **alias** | A nickname for this environment (e.g., "testnet"). You use this when switching between networks with commands like `sui client switch --env testnet` |
| **rpc** | The RPC (Remote Procedure Call) endpoint URL. This is the server you connect to when making requests to the Sui network. In this case, it's Sui's official testnet node |
| **ws** | WebSocket endpoint URL for real-time event subscriptions. The `~` means it's not configured/null (optional feature) |
| **basic_auth** | HTTP Basic Authentication credentials (username:password) if the RPC endpoint requires authentication. The `~` means none are configured |
| **chain_id** | A unique identifier for this specific blockchain network. `4c78adac` identifies the Sui testnet. Different networks (mainnet, devnet, testnet) have different chain IDs |

---

## The Missing Audience Declaration

The Getting Started section is visibly designed for developers. Every page assumes you're writing code, running CLI commands, and deploying to a network. Yet the section never says so.

This matters more than it might appear. Blockchain projects attract mixed audiences: developers, investors, researchers, and enthusiasts all arrive at the documentation from different contexts. Without an explicit statement — "This section guides developers building on Sui" — non-technical readers waste time trying to orient themselves in a space designed for someone else.

But the implicit audience is narrower still. Reading through the documentation, the assumed reader is not just a developer — they're a developer with existing blockchain context. Terms like on-chain, off-chain, gas, and consensus appear without definition. The hover tooltip system covers some terminology, but foundational concepts that a developer coming from web or mobile development would need to look up elsewhere are left unexplained.

This defines the documentation's real target audience by implication: someone who already understands how blockchains work and wants to learn Sui's specific approach. A web developer exploring blockchain for the first time, or an investor trying to understand what they're evaluating technically, will repeatedly hit terminology walls that send them outside the documentation to fill in context.

This is a deliberate or unconscious positioning choice, and it's worth naming clearly. The Sui documentation serves crypto-native developers well. It does not serve the curious newcomer, and it doesn't claim to — but it also doesn't say so. Adding an explicit audience statement, and either extending the tooltip coverage to foundational terms or linking to an external primer for blockchain basics, would close a gap that currently goes unacknowledged.

A single sentence at the top of the Getting Started landing page resolves the immediate confusion. It costs nothing and prevents a category of readers from spending time in a section that wasn't designed for them.

---

## Move: The Conceptual Scaffolding Problem

Move is where Sui's documentation faces its hardest challenge, and where the gap between intention and execution is most visible.

The language is genuinely novel. Move was designed for asset ownership from the ground up. Its type system mathematically prevents reentrancy attacks — not by defensive coding patterns, but by making the unsafe operation structurally impossible. This is a meaningful claim, and the documentation does eventually explain it.

The problem is sequencing. A developer reading the Sui documentation for the first time encounters Move as a set of syntax rules before they've built an intuition for why it works differently. The conceptual scaffolding — the object-centric model, resource safety, the three-layer hierarchy of packages, modules, and objects — is present in the documentation, but it's distributed across multiple sections without a clear conceptual arc connecting them.

To understand why Move handles assets differently, you need to understand Sui's object model. To understand the object model, you need to understand why Sui treats blockchain state as owned objects rather than account balances. Each of these explanations exists in the documentation — but the reader must assemble them in the right order independently. The documentation doesn't make the sequence obvious.

Contrast this with the ideal approach: a short, dense conceptual page that explicitly states "Before you write your first Move module, here is the mental model you need to hold." Something that explains, in plain language, that Sui treats assets as independent objects rather than ledger entries, that Move's type system enforces ownership rules at compile time, and that resource safety means you cannot accidentally duplicate or lose data. Three paragraphs. Linked prominently before the first code example.

This page does not exist. Its absence is the documentation's most consequential gap for a developer coming from Ethereum or a general web development background.

---

## What the Documentation Gets Genuinely Right

**The hover tooltips.** Throughout the documentation, blockchain terminology is surfaced with hover explanations — epoch, checkpoint, and others. This is an elegant solution to the glossary problem. Rather than forcing developers to context-switch to a reference page, terminology explanation arrives inline, at the point of need. It respects the developer's reading flow while acknowledging that not every reader arrives with the same vocabulary. That said, the tooltip coverage is selective — foundational terms like on-chain and off-chain are used throughout the documentation without definition, implying familiarity the documentation cannot assume in every reader.

**The fee structure explanation.** Sui's fee model differs from Ethereum's in a non-obvious way: transactions pay for both computation and storage, calculated separately. The documentation doesn't gloss over this. It provides the formula, explains why the distinction matters, and grounds it in a practical takeaway: one test SUI token is enough for extensive development work because both costs are low. This is the kind of honest, concrete explanation that builds developer trust.

**The code examples.** The Getting Started code examples are accurate. Developers who follow the "Hello, World!" guide will find that the commands work, the output matches what's described, and the sequence is reproducible. In a documentation ecosystem where outdated or incorrect code examples are endemic, this is worth calling out explicitly.

**The Related Topics component.** The automated related links system — a custom React component that extracts and ranks internal links from page content, validates them against quality criteria, and surfaces the top four — is sophisticated and thoughtfully implemented. It scales automatically with content growth and degrades gracefully when metadata is unavailable. Most documentation teams handle related content through manual curation that inevitably falls out of date. Sui's system is technically superior and practically more maintainable.

---

## The Slush Wallet: A Prerequisite That Fails Its Reader

The Connect a Frontend guide introduces Slush — a browser-based wallet — as a prerequisite for connecting a React frontend to a published Move package. The prerequisite is listed. What's missing is context.

At this point in the documentation, the developer has a CLI wallet with a configured address and testnet tokens. They've published a Move package. They understand, at least functionally, how the CLI wallet works.

Slush is a different wallet, with a different address, on a different default network — mainnet rather than testnet. The documentation lists "Create a Slush wallet" as a prerequisite step without explaining any of these differences. Slush itself does surface the mismatch when a transaction is attempted — the warning reads: **"This app is running on testnet, but your Slush network is set to mainnet. If you wish to proceed, this transaction will process on testnet."** The message is clear and specific.

The documentation failure is not that the mismatch goes undetected. It's that the developer arrives at that warning without the context to understand it. They haven't been told that Slush defaults to mainnet, that it creates a new address separate from their CLI wallet, or that switching networks in the wallet settings is a required step before proceeding. The warning describes a situation the documentation never prepared them for.

A developer who understands the two-wallet, two-network setup will read the warning and know exactly what to do. A developer following the guide without that context will either dismiss the warning and proceed incorrectly, or stop and search for an explanation that the documentation should have provided before they ever reached this step.
Two mismatches operate simultaneously and silently:

Two mismatches operate simultaneously and silently:
- The Slush wallet has a new address, separate from the CLI wallet address the developer funded with testnet SUI
- Slush defaults to mainnet, while the published Move package lives on testnet

Neither mismatch is surfaced in the documentation until the developer discovers it through failed transactions.

The fix is three sentences:

> "Slush is a browser wallet separate from your CLI wallet. It creates a new address distinct from your CLI address. After installing Slush, switch it from mainnet to testnet in the wallet settings, then fund your new Slush address using the testnet faucet."

Three sentences prevent the two most common failure modes in this guide. The absence of those sentences represents a documentation gap disproportionate to its cost.

---

## Navigation Coherence: Where the Onboarding Flow Breaks Down

At the end of the Connect a Frontend guide, developers are directed to "Access Sui Data" in the Develop section. This navigation choice breaks the implicit contract of the Getting Started path.

The getting started section is a coherent onboarding journey with its own established rhythm: install tools, configure environment, deploy a package, connect a frontend. Developers following this path have a reasonable expectation that the "next step" at the end of any guide will continue within that journey — not teleport them to a conceptual development topic they haven't been prepared for.

A "Next Steps" page already exists within the Getting Started section specifically to bridge developers from the hello-world phase into more substantive development. The link at the end of Connect a Frontend should point there, not to a topic in the Develop section that assumes context the developer hasn't yet built.

This is a structural detail, but it matters. The onboarding flow is a communication product. When it breaks unexpectedly, it signals to the developer that the documentation team didn't walk the path end to end. That impression, once formed, is hard to undo.

---

## The Architecture of the Full Documentation Site

Beyond the Getting Started section, the documentation's information architecture reveals a pattern that repeats across the site: the Develop section mixes conceptual content (Sui Architecture, Object Model, Consensus) with procedural guides (Writing Move Packages, Building Transactions, Testing & Debugging) without clearly signalling which category a given page belongs to.

A developer looking for a conceptual explanation of the consensus model will navigate through the same section as a developer looking for step-by-step transaction building instructions. The documentation knows what each page is — the content is correctly written as either conceptual or procedural. The navigation doesn't communicate the distinction.

The practical consequence is that developers either consume content in the wrong order (reading procedural guides before they have the conceptual foundation) or spend time navigating to find what they need (because the category structure is invisible from the navigation).

The recommended restructuring is straightforward:
- Separate Develop into explicit subsections: Concepts, How-to Guides, and Design Patterns
- Add content-type labels to pages or sections (Conceptual / Procedural / Reference)
- Add a "Core Concepts for Developers" section between Getting Started and the full Develop section, bridging developers who have completed the hello-world tutorial but aren't ready for architectural deep-dives

The Onchain Finance and Node Operators sections have a related problem: they don't indicate their prerequisites. A developer who wants to build a DeFi application on Sui doesn't know whether to start in Develop or jump directly to Onchain Finance, or whether there's a recommended reading order between them. Prerequisite tags and a "Build by Use Case" landing page would resolve this.

---

## The Already-Published Error: An Undocumented Edge Case

One specific gap in the Getting Started procedural flow deserves mention. When a developer attempts to republish a Move package they've previously deployed, they encounter:

```
Failed to publish the Move module(s), reason: Your package is already published. 
You have to manually remove the publication entry to publish again.
```

The error message references a "publication entry" without telling the developer where it lives, what it looks like, or how to remove it. The answer is straightforward: open `Published.toml`, delete the section for the relevant environment, and re-run the publish command. This is a common operation during iterative development — publish, test, modify, republish. Its absence from the documentation is a gap that most developers will hit within the first development session.

---

## The Transition from Interaction to Transaction Considerations

The documentation moves from "Interact with the Move Package" to "Important Transaction Considerations" without explaining why the two topics are adjacent. The relationship is logical — any package interaction requires submitting an on-chain transaction, so understanding transaction constraints is a direct consequence of the interaction section — but the relationship is implicit.

A single transitional sentence would make the connection visible: something that explains that the interactions shown in the previous section execute as transactions, and that the following section covers the constraints and failure modes developers will encounter when those transactions execute. Without it, developers wonder why a discussion of object locking and transaction size limits has appeared in the middle of a getting-started guide.

---

## Recommendations

**1. Fix the `sui client` CLI documentation immediately.** The actual trigger for the setup prompt is `sui client balance`, not `sui client`. This is a first-impression failure that costs significant developer trust. It's a single-line documentation fix.

**2. Document the client.yaml parameters inline.** After the CLI setup, developers are left with a configuration file whose fields (alias, rpc, ws, basic_auth, chain_id) are not explained in the documentation. A short parameter reference table — either inline in the configuration guide or linked from it — would close this gap without requiring structural changes.

**3. Add an audience declaration to the Getting Started landing page.** One sentence explicitly stating that the section is designed for developers building on Sui. Routes non-developer audiences before they waste time.

**4. Create a standalone conceptual page: "The Mental Model You Need Before Writing Move."** Three to four paragraphs explaining the object-centric model, resource safety, and why Move enforces ownership at compile time. Link it prominently before the first code example in the Getting Started flow. This is the highest-impact gap in the current documentation.

**5. Expand the Slush wallet prerequisite.** Three sentences explaining the new address, the mainnet default, and the testnet switching and funding workflow. Prevents the two most common failure modes in the Connect a Frontend guide.

**6. Fix the "Next Steps" navigation at the end of Connect a Frontend.** Point to the Getting Started "Next Steps" page, not to "Access Sui Data" in the Develop section. Maintains the coherence of the onboarding journey.

**7. Document the "Already Published" error resolution.** Add an inline note to the Publishing a Move Package section explaining that `Published.toml` tracks deployments, and provide the exact steps to clear the entry for republishing.

**8. Add a transitional sentence between "Interact with the Move Package" and "Important Transaction Considerations."** Makes the logical connection between the two sections visible rather than leaving the developer to infer it.

**9. Restructure the Develop section around explicit content-type categories.** Separate Concepts, How-to Guides, and Design Patterns. Add prerequisite tags to domain-specific sections (Onchain Finance, Node Operators). Consider a "Build by Use Case" landing page that maps common developer goals to required reading paths.

---

## Overall Assessment

The Sui developer documentation is the product of a team that clearly cares about developer experience. The Getting Started section has genuine strengths: clean entry points, accurate code examples, an elegant tooltip system for terminology, a technically sophisticated related links component, and honest, concrete explanations of the fee structure.

The gaps are real, but they are specific and fixable. The most consequential ones cluster around the same underlying problem: the documentation explains what to do without consistently building the conceptual foundation that makes the instructions meaningful. Developers who arrive with blockchain experience will navigate this successfully. Developers coming from web development or no prior blockchain background will hit walls — the CLI trigger mismatch, the Slush wallet context gap, the absence of a coherent Move mental model introduction — that feel larger than their technical complexity warrants.

The documentation's greatest strength — its breadth and comprehensiveness — becomes a weakness when the navigation doesn't help developers find the right content in the right order. A developer who reads all of the Sui documentation will understand Sui deeply. A developer who reads it in the wrong order, or gets stuck at a specific friction point and doesn't know why, may not make it far enough to discover what the documentation does well.

The gap between those two outcomes is not a technology problem. It's a communication architecture problem — and it's solvable.

---

## About Farowave

At Farowave, we work with both Sphinx and Docusaurus across our documentation engagements — from enterprise API reference builds and docs-as-code retainers to localization governance and TMS workflow design. If you're evaluating documentation tooling for your organization, or need help structuring a documentation system that scales, [get in touch](https://farowave.com).
