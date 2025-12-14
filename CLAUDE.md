# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Univrs.io is a static website advocating for publicly-funded cloud infrastructure and mycelial economics principles. The site is deployed to Cloudflare Pages at https://univrs.io.

## Development

**Local Development:**
```bash
npx serve .
# or
python -m http.server 8000
```

No build step required - this is pure HTML/CSS/JS.

## Architecture

**Structure:**
- HTML pages at root level (index.html, vision.html, technology.html, evidence.html, roadmap.html, collaborate.html, resources.html)
- `css/styles.css` - Single stylesheet with CSS custom properties for theming
- `js/main.js` - Handles theme toggle, scroll reveal animations, mobile nav
- `assets/` - Static assets (logo.png)

**Design System:**
- Theme: Organic bioluminescence (dark forest floor with mycelial glow)
- Typography: Syne (display headings) + Crimson Pro (body text)
- Dark/light mode via `data-theme` attribute on `<html>`
- CSS custom properties defined in `:root` for colors, spacing, typography

**Key CSS Patterns:**
- BEM-like naming (`.nav__link`, `.hero__title`)
- Mobile-first responsive design
- Scroll-triggered animations via Intersection Observer in main.js

## Content Sections

### Technology Page (technology.html)

The technology page documents the full stack for regenerative infrastructure:

1. **Foundation Layer**: Holochain, hREA, IPFS, ThreeFold Mycelium
2. **Scaling Layer** (PlanetServe Integration):
   - Reputation Scoring - Asymmetric reward/punishment for trust infrastructure
   - Hash-Radix Tree (HR-Tree) - Decentralized workload distribution
   - S-IDA Anonymous Communication - Privacy via threshold encryption
   - BFT Verification Committee - Tendermint-based consensus
3. **Economic Layer**: Cyclos, Credit Commons Protocol, CES, TimeBanks
4. **Governance Layer**: Loomio, Decidim
5. **Bioregional Layer**: Hylo, IoT sensors, IOEN, ValueFlows

### Roadmap Page (roadmap.html)

Three main phases plus technical track:

- **Phase 1** (0-6 months): Foundation Building
- **Phase 2** (6-18 months): Network Development
- **Phase 3** (18+ months): Economic Transition
- **Technical Track**: PlanetServe Integration (6-week sprint)
  - Weeks 1-2: Reputation Scoring System
  - Weeks 3-4: Hash-Radix Tree (HR-Tree)
  - Weeks 5-6: S-IDA Anonymous Communication
  - Future: BFT Verification Committee

## Related Repositories

| Repository | Purpose |
|------------|---------|
| MyceliaNetwork | P2P substrate layer with PlanetServe integration |
| RustOrchestration | Infrastructure orchestration |
| CryptoSaint | Mycelial economics (mutual credit, reputation) |

## External References

- [PlanetServe Paper](https://arxiv.org/abs/2504.20101) - Decentralized LLM serving research
- [Holochain](https://holochain.org) - Agent-centric architecture
- [ValueFlows](https://valueflo.ws) - Economic vocabulary
- [Credit Commons](https://creditcommons.net) - Network federation
