# Univrs.io

**Regenerative Digital Infrastructure through Mycelial Economics**

Building distributed systems that share resources like fungal networks—regenerative, resilient, and owned by communities.

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

## 🌐 Live Site

**[univrs.io](https://univrs.io)**

## 📖 About

Univrs.io advocates for publicly-funded cloud infrastructure where every person's data is stored safely and not owned by anyone else. We combine technology exploration with policy advocacy, drawing on mycelial economics principles—distributed coordination without centralized control.

### Core Principles

- **Data Sovereignty** — Your data belongs to you, not corporations
- **Regenerative Economics** — Systems that increase capacity over time
- **Decentralized Coordination** — No central control points
- **Democratic Governance** — Community-defined algorithms
- **Bioregional Integration** — Economic flows connected to ecological health

## 🗂️ Site Structure

```
univrs-site/
├── index.html        # Homepage
├── vision.html       # Mission & mycelial principles
├── technology.html   # Tech stack (Holochain, hREA, Cyclos...)
├── evidence.html     # Real-world examples (Sardex, Mondragon, WIR)
├── roadmap.html      # Implementation phases
├── collaborate.html  # How to contribute
├── resources.html    # Books, tools, organizations
├── css/
│   └── styles.css    # Design system
└── js/
    └── main.js       # Interactions & animations
```

## 🚀 Deployment

### Cloudflare Pages

1. Fork this repository
2. Connect to [Cloudflare Pages](https://pages.cloudflare.com)
3. Configure build settings:
   - **Build command:** (none required for static)
   - **Build output directory:** `/`
4. Deploy

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/univrs-site.git
cd univrs-site

# Serve locally (any static server works)
npx serve .
# or
python -m http.server 8000
```

## 🛠️ Technology

**Design:**
- Pure HTML/CSS/JS (no build step)
- CSS custom properties for theming
- Dark/light mode support
- Responsive mobile-first design
- Scroll-triggered animations

**Typography:**
- [Syne](https://fonts.google.com/specimen/Syne) (display)
- [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) (body)

**Aesthetic:**
- Organic bioluminescence theme
- Mycelial network canvas animation
- Inspired by forest floor with glowing accents

## 🤝 Contributing

We welcome contributions! See [collaborate.html](https://univrs.io/collaborate.html) for ways to help:

- **Technical Development** — Rust, Holochain, distributed systems
- **Economic Modeling** — Research, analysis, game theory
- **Community Organizing** — Pilot deployments, facilitation
- **Policy & Advocacy** — Government relations, coalition building

### Quick Start

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-improvement`)
3. Make your changes
4. Commit (`git commit -m 'Add amazing improvement'`)
5. Push (`git push origin feature/amazing-improvement`)
6. Open a Pull Request

## 📚 Related Projects

- [CryptoSaint.io](https://cryptosaint.io) — Mycelial economics framework
- [book.univrs.io](https://book.univrs.io) — Technical documentation
- [Holochain](https://holochain.org) — Agent-centric distributed computing
- [ValueFlows](https://valueflo.ws) — Economic vocabulary standard

## 📄 License

MIT License — See [LICENSE](LICENSE) for details.

## 📧 Contact

- **Email:** ardeshir@sepahsalar.org
- **GitHub:** [@univrs](https://github.com/univrs)

---

*"Every person deserves to have their data stored safely and not owned by anyone else."*

🍄 **Building infrastructure of the people, by the people, for the people.**

This is a fantastic find for the [Univrs.io](http://Univrs.io) vision. PlanetServe addresses exactly the infrastructure scaling problem you’ve been working on, and its architecture has remarkable alignment with mycelial economics principles. Let me break this down and map the integration points.

## PlanetServe: Core Innovation Summary

PlanetServe is a **decentralized overlay network for LLM serving** that solves the scalability bottleneck facing small organizations and researchers who can’t afford or access centralized cloud infrastructure. The key insight is treating idle computing resources across organizations as a shared commons.

**Four Core Research Problems Solved:**

1. **Overlay Network Organization** - Dynamic user nodes form peer networks, model nodes contribute GPU resources, and a verification committee ensures quality through BFT consensus
1. **Anonymous Communication** - A novel hybrid of Onion routing and Secure Information Dispersal Algorithm (S-IDA) that splits messages into “cloves” across multiple paths, achieving both privacy and resilience
1. **Overlay Forwarding via Hash-Radix Trees** - A distributed data structure for KV cache sharing across nodes without centralized coordination, reducing latency 40-50%
1. **Reputation-Based Verification** - Sampling-based verification using perplexity scoring to detect dishonest model nodes, with reputation scores that decay faster for bad behavior than they accumulate for good behavior

**Performance Results:**

- 50%+ latency reduction compared to non-sharing baselines
- 95%+ delivery success rate even with 3% node failure rates
- Confidential Computing adds only ~1ms overhead
- Works across consumer and datacenter GPUs

-----

## Alignment with Mycelial Economics

The convergence with your [Univrs.io](http://Univrs.io) vision is striking:

|PlanetServe Mechanism                               |Mycelial Economics Equivalent                  |
|----------------------------------------------------|-----------------------------------------------|
|Reputation scores based on contribution quality     |Credit creation through verified contribution  |
|Resources flow to nodes with available capacity     |Abundance-based distribution patterns          |
|No central scheduler - emergent coordination        |Decentralized coordination without hierarchy   |
|Verification committee with BFT consensus           |Transparent, auditable governance algorithms   |
|Contribution credit proportional to resources shared|Mathematical reward for ecosystem participation|

-----

## Proposed Integration into Univrs.io/RustOrchestration

### 1. **Extend StateStore with PlanetServe’s Reputation Model**

Your existing `StateStore` trait architecture can incorporate their reputation scoring:

```rust
pub trait ReputationStore: StateStore {
    async fn update_reputation(
        &self,
        node_id: &NodeId,
        epoch: Epoch,
        credit_score: f64,  // Normalized perplexity from verification
    ) -> Result<ReputationScore, StoreError>;
    
    async fn apply_punishment(
        &self,
        node_id: &NodeId,
        window: &[f64],  // Sliding window of scores
        gamma: f64,      // Punishment threshold
    ) -> Result<ReputationScore, StoreError>;
}
```

Their formula: `R(T) = α·R(T-1) + β·C(T)` with asymmetric punishment maps directly to mycelial credit scoring where reputation influences resource allocation priority.

### 2. **Hash-Radix Tree for Workload Distribution**

The HR-tree data structure solves a problem you’ll face with distributed container scheduling - how to route workloads to nodes with relevant cached state without centralized knowledge. Adaptation for RustOrchestration:

- **Instead of KV cache prefixes** → Container image layers and configuration states
- **Instead of prompt matching** → Workload affinity matching
- **Load Balance Factor** → Already aligns with your MutualCreditScheduler concept

### 3. **S-IDA for Secure Resource Coordination**

Their (n,k) threshold scheme where k-of-n cloves reconstruct messages could secure:

- Credit transactions between nodes
- Sensitive workload specifications
- Ecological impact data that shouldn’t be visible to individual nodes

### 4. **Verification Committee as Governance Layer**

Their Tendermint-based BFT committee provides a template for:

- Auditing node behavior against protocol expectations
- Maintaining canonical reputation/credit state
- Preventing Sybil attacks through credential verification

-----

## Key Technical Learnings to Apply

**What worked for them:**

- Reputation punishment >> reward asymmetry (ensures consistent good behavior)
- Delta updates for distributed state (vs. full broadcasts) - 10x reduction in network cost
- Session affinity for consecutive requests (preserves cache benefits)
- γ = 1/5 punishment threshold detected dishonest nodes within 5 epochs

**What they explicitly defer:**

- Model partitioning across nodes (complementary research)
- Blockchain integration (they use lighter BFT but note blockchain adds transparency/auditability)
- Non-text modalities

-----

## Strategic Implications for Univrs.io

PlanetServe validates several of your core architectural bets:

1. **Rust for distributed systems** - Their entire prototype is Rust-based, confirming performance/safety alignment
1. **Contribution-based resource access** - Their incentive model where contribution credit determines what you can deploy is essentially mutual credit for compute
1. **Decentralized verification is tractable** - 45+ verifications/minute on high-end hardware, 20+ on standard - sufficient for production networks
1. **Consumer hardware is viable** - They explicitly show 20x cost reduction vs. AWS using consumer GPUs

The paper also provides academic validation language you could incorporate into the a16z pitch - this is published research (arXiv, appears headed for a systems venue) demonstrating that decentralized AI infrastructure achieves competitive performance.

-----

