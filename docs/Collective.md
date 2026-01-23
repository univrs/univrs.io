# The Univrs.io Collective Architecture

> **How Orchestration and P2P Networks Unite**
> A practical guide to building decentralized infrastructure with mycelial economics

---

## Table of Contents

1. [Overview](#overview)
2. [The Big Picture](#the-big-picture)
3. [Component Relationships](#component-relationships)
4. [Shared Foundation](#shared-foundation)
5. [How They Support Each Other](#how-they-support-each-other)
6. [Prerequisites](#prerequisites)
7. [Building the Stack](#building-the-stack)
8. [Running the Network](#running-the-network)
9. [Comprehensive Use Case: Community Cloud](#comprehensive-use-case-community-cloud)
10. [Operational Workflows](#operational-workflows)
11. [Troubleshooting](#troubleshooting)

---

## Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         UNIVRS.IO COLLECTIVE ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   "The network is not pipes. It is a living market."                            │
│                                                                                  │
│   Two systems, one vision: decentralized infrastructure owned by communities.   │
│                                                                                  │
│   ┌─────────────────────────────────┐  ┌─────────────────────────────────────┐  │
│   │     UNIVRS-ORCHESTRATION        │  │        UNIVRS-NETWORK               │  │
│   │                                 │  │                                     │  │
│   │  AI-Native Container            │  │  Mycelial P2P Network               │  │
│   │  Orchestration                  │  │  with Economic Primitives           │  │
│   │                                 │  │                                     │  │
│   │  • Deploy workloads             │  │  • Peer discovery                   │  │
│   │  • Manage nodes                 │  │  • Message routing                  │  │
│   │  • Reconcile state              │  │  • Reputation tracking              │  │
│   │  • MCP AI control               │  │  • Mutual credit                    │  │
│   │                                 │  │                                     │  │
│   └────────────────┬────────────────┘  └─────────────────┬───────────────────┘  │
│                    │                                      │                      │
│                    │     SHARED IDENTITY (Ed25519)        │                      │
│                    │     SHARED ECONOMICS (ENR)           │                      │
│                    │     SHARED GOSSIP (Chitchat)         │                      │
│                    └──────────────────────────────────────┘                      │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

The Univrs.io ecosystem comprises two primary architectural components that work in concert:

| Component | Purpose | Core Technology |
|-----------|---------|-----------------|
| **univrs-orchestration** | Container lifecycle, workload scheduling, AI control | Rust, MCP, Youki OCI |
| **univrs-network** | P2P connectivity, economic incentives, reputation | Rust, libp2p, Gossipsub |

Together, they form the backbone of a **community-owned cloud infrastructure** where:
- No single entity controls the network
- Resources flow based on economic contribution
- AI agents can autonomously manage workloads
- Trust is earned through reputation, not granted by authority

---

## The Big Picture

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                              UNIVRS.IO ECOSYSTEM STACK                                   │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  LAYER 4: APPLICATIONS (Spirits)                                                         │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │   DOL Smart Contracts   │   VUDO VM Sandbox   │   Agent Manifests                 │ │
│  │   Autonomous agents running in capability-constrained environments                 │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                            │                                             │
│                                            ▼                                             │
│  LAYER 3: ORCHESTRATION                                                                  │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │                           univrs-orchestration                                      │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │ │
│  │  │   REST API   │  │  MCP Server  │  │  Reconciler  │  │  Scheduler   │            │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘            │ │
│  │                                                                                     │ │
│  │  Container Runtime (Youki) ←→ ClusterManager (Chitchat) ←→ StateStore              │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                            │                                             │
│                                            ▼                                             │
│  LAYER 2: ECONOMICS (ENR)                                                                │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │   │ Entropy  │  │  Nexus   │  │ Revival  │  │  Septal  │  │ Pricing  │            │ │
│  │   │ Scoring  │  │ Election │  │  Pools   │  │  Gates   │  │ Models   │            │ │
│  │   └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │ │
│  │                                                                                     │ │
│  │   Credit Lines ←→ Reputation Scores ←→ Resource Allocation                         │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                            │                                             │
│                                            ▼                                             │
│  LAYER 1: NETWORKING                                                                     │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │                            univrs-network                                           │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │ │
│  │  │  Gossipsub   │  │   Kademlia   │  │    mDNS      │  │   Identify   │            │ │
│  │  │  Pub/Sub     │  │    DHT       │  │  Discovery   │  │   Protocol   │            │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘            │ │
│  │                                                                                     │ │
│  │  TCP/QUIC + Noise Encryption + Yamux Multiplexing                                   │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                            │                                             │
│                                            ▼                                             │
│  LAYER 0: IDENTITY                                                                       │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│  │                           univrs-identity                                           │ │
│  │                                                                                     │ │
│  │  Ed25519 Keypair ──▶ PeerId ──▶ DID ──▶ NodeId                                     │ │
│  │                                                                                     │ │
│  │  Self-sovereign identity: No central registry, cryptographic proof                 │ │
│  └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Relationships

### Information Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                            COMPONENT DATA FLOW                                           │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   USER / AI AGENT                                                                        │
│        │                                                                                 │
│        │  Intent: "Deploy 3 replicas of web-server"                                     │
│        ▼                                                                                 │
│   ┌─────────────────────┐                                                               │
│   │     MCP Server      │  Model Context Protocol                                       │
│   │  (orchestration)    │  AI-native control interface                                  │
│   └──────────┬──────────┘                                                               │
│              │                                                                           │
│              │  WorkloadDefinition                                                       │
│              ▼                                                                           │
│   ┌─────────────────────┐                                                               │
│   │    Orchestrator     │                                                               │
│   │    Reconcile Loop   │  Sense → Compare → Plan → Actuate                            │
│   └──────────┬──────────┘                                                               │
│              │                                                                           │
│              │  Query: "Which nodes can run this?"                                      │
│              ▼                                                                           │
│   ┌─────────────────────┐          ┌─────────────────────┐                              │
│   │   ClusterManager    │◀────────▶│   P2P Network       │                              │
│   │    (Chitchat)       │          │   (libp2p)          │                              │
│   └──────────┬──────────┘          └─────────┬───────────┘                              │
│              │                               │                                           │
│              │  Node list with               │  Gossip: Node status                     │
│              │  reputation scores            │  DHT: Peer discovery                     │
│              ▼                               │                                           │
│   ┌─────────────────────┐                    │                                          │
│   │     Scheduler       │◀───────────────────┘                                          │
│   │ (MutualCredit)      │  Economic weight: Credit + Reputation                         │
│   └──────────┬──────────┘                                                               │
│              │                                                                           │
│              │  Scheduling decision: Node A, B, C                                       │
│              ▼                                                                           │
│   ┌─────────────────────┐                                                               │
│   │  Container Runtime  │  Create OCI containers                                        │
│   │   (Youki / Mock)    │                                                               │
│   └──────────┬──────────┘                                                               │
│              │                                                                           │
│              │  Container status → StateStore                                           │
│              ▼                                                                           │
│   ┌─────────────────────┐          ┌─────────────────────┐                              │
│   │    Event Hub        │─────────▶│   WebSocket         │                              │
│   │  (broadcast)        │          │   Clients           │                              │
│   └─────────────────────┘          └─────────────────────┘                              │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Gossip Topology

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                            CLUSTER GOSSIP NETWORK                                        │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   Each node runs BOTH orchestration and networking components:                          │
│                                                                                          │
│   ┌───────────────────────┐                      ┌───────────────────────┐              │
│   │       NODE A          │                      │       NODE B          │              │
│   │                       │◀────────────────────▶│                       │              │
│   │  ┌─────────────────┐  │     Gossipsub        │  ┌─────────────────┐  │              │
│   │  │  Orchestrator   │  │     Kademlia         │  │  Orchestrator   │  │              │
│   │  │  Daemon         │  │     Chitchat         │  │  Daemon         │  │              │
│   │  └─────────────────┘  │                      │  └─────────────────┘  │              │
│   │  ┌─────────────────┐  │                      │  ┌─────────────────┐  │              │
│   │  │  Mycelial       │  │                      │  │  Mycelial       │  │              │
│   │  │  Network Node   │  │                      │  │  Network Node   │  │              │
│   │  └─────────────────┘  │                      │  └─────────────────┘  │              │
│   │  ┌─────────────────┐  │                      │  ┌─────────────────┐  │              │
│   │  │  Container      │  │                      │  │  Container      │  │              │
│   │  │  Runtime        │  │                      │  │  Runtime        │  │              │
│   │  └─────────────────┘  │                      │  └─────────────────┘  │              │
│   │                       │                      │                       │              │
│   │  Ed25519: 12D3KooW... │                      │  Ed25519: 12D3KooX... │              │
│   └───────────┬───────────┘                      └───────────┬───────────┘              │
│               │                                              │                           │
│               │              ┌───────────────────────┐       │                           │
│               │              │       NODE C          │       │                           │
│               └─────────────▶│                       │◀──────┘                           │
│                              │  ┌─────────────────┐  │                                   │
│                              │  │  Orchestrator   │  │                                   │
│                              │  └─────────────────┘  │                                   │
│                              │  ┌─────────────────┐  │                                   │
│                              │  │  Mycelial Node  │  │                                   │
│                              │  └─────────────────┘  │                                   │
│                              │  ┌─────────────────┐  │                                   │
│                              │  │  Container RT   │  │                                   │
│                              │  └─────────────────┘  │                                   │
│                              │                       │                                   │
│                              │  Ed25519: 12D3KooY... │                                   │
│                              └───────────────────────┘                                   │
│                                                                                          │
│   Gossip Topics:                                                                         │
│   • cluster/events     ─── Node added/removed/updated                                   │
│   • workload/status    ─── Container lifecycle events                                   │
│   • credit/transaction ─── Mutual credit transfers                                      │
│   • vouch/attestation  ─── Reputation vouches                                           │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Shared Foundation

Both systems share critical infrastructure components:

### 1. Ed25519 Identity (univrs-identity)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           UNIFIED IDENTITY SYSTEM                                        │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   Single Ed25519 keypair serves all purposes:                                           │
│                                                                                          │
│   ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│   │                        Ed25519 Keypair                                             │ │
│   │                                                                                    │ │
│   │   Private Key (32 bytes)     ───────────────▶     Public Key (32 bytes)          │ │
│   │   Keep secret, never share                        Share freely, verify sigs       │ │
│   └────────────────────────────────────────────────────────────────────────┬──────────┘ │
│                                                                             │            │
│          ┌──────────────────────────────────────────────────────────────────┼─────┐     │
│          │                                                                  │     │     │
│          ▼                          ▼                          ▼            │     │     │
│   ┌─────────────┐           ┌─────────────┐           ┌─────────────┐      │     │     │
│   │   NodeId    │           │   PeerId    │           │    DID      │      │     │     │
│   │             │           │             │           │             │      │     │     │
│   │ Orchestrator│           │  libp2p     │           │ W3C DID     │      │     │     │
│   │ clusters    │           │  networking │           │ standard    │      │     │     │
│   └─────────────┘           └─────────────┘           └─────────────┘      │     │     │
│                                                                             │     │     │
│   All derived from the same 32-byte public key ─────────────────────────────┘     │     │
│                                                                                   │     │
│   Usage:                                                                          │     │
│   • NodeId  = Raw Ed25519 public key bytes                                        │     │
│   • PeerId  = Base58-encoded public key                                           │     │
│   • DID     = did:key:z6Mk... (multibase encoded)                                 │     │
│                                                                                   │     │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ENR Economic Primitives (univrs-enr)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                            ENR: ENTROPY-NEXUS-REVIVAL                                    │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   Shared economics layer used by both orchestration and networking:                     │
│                                                                                          │
│   ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│   │                                ENTROPY                                             │ │
│   │                                                                                    │ │
│   │   S_total = wₙ·Sₙ + wᶜ·Sᶜ + wˢ·Sˢ + wᵗ·Sᵗ                                        │ │
│   │                                                                                    │ │
│   │   • Sₙ = Network entropy (connectivity distribution)                              │ │
│   │   • Sᶜ = Credit entropy (balance distribution)                                    │ │
│   │   • Sˢ = Stake entropy (resource commitment)                                      │ │
│   │   • Sᵗ = Transaction entropy (activity distribution)                              │ │
│   │                                                                                    │ │
│   │   Higher entropy = healthier network                                               │ │
│   └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
│   ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│   │                                 NEXUS                                              │ │
│   │                                                                                    │ │
│   │   Hub election and market-making for resource allocation:                          │ │
│   │                                                                                    │ │
│   │   • Nodes with high connectivity become Nexus candidates                          │ │
│   │   • Nexus nodes coordinate resource pricing                                        │ │
│   │   • Democratic election based on reputation + contribution                         │ │
│   │                                                                                    │ │
│   │   Orchestration: Scheduler prefers Nexus nodes for coordination                   │ │
│   │   Networking: Nexus nodes serve as gossip hubs                                    │ │
│   └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
│   ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│   │                                REVIVAL                                             │ │
│   │                                                                                    │ │
│   │   Resource recycling from failed/departed nodes:                                   │ │
│   │                                                                                    │ │
│   │   Distribution:                                                                    │ │
│   │   ├── Network Maintenance: 40%                                                    │ │
│   │   ├── New Node Subsidy:    25%                                                    │ │
│   │   ├── Low Balance Support: 20%                                                    │ │
│   │   └── Reserve Buffer:      15%                                                    │ │
│   │                                                                                    │ │
│   │   Orchestration: Revival funds container migrations                               │ │
│   │   Networking: Revival bootstraps new peer connections                              │ │
│   └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
│   ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│   │                                SEPTAL                                              │ │
│   │                                                                                    │ │
│   │   Circuit breakers to isolate failing nodes:                                       │ │
│   │                                                                                    │ │
│   │   • Woronin body pattern: seal off damaged sections                               │ │
│   │   • Trip when node reputation drops below threshold                               │ │
│   │   • Gradual reconnection as reputation recovers                                   │ │
│   │                                                                                    │ │
│   │   Orchestration: Stop scheduling to unhealthy nodes                               │ │
│   │   Networking: Block gossip to/from banned peers                                    │ │
│   └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## How They Support Each Other

### Orchestration → Network

```
WHAT ORCHESTRATION PROVIDES TO NETWORK:

┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  1. RESOURCE METERING                                                           │
│     Orchestrator tracks container CPU/memory/network usage                      │
│     → Feeds metrics to ENR for credit calculation                              │
│                                                                                 │
│  2. WORKLOAD DISTRIBUTION EVIDENCE                                              │
│     Orchestrator knows which nodes run which containers                         │
│     → Network uses this for reputation vouching                                │
│                                                                                 │
│  3. NODE HEALTH PROBES                                                          │
│     Orchestrator performs container health checks                               │
│     → Network incorporates into reputation scoring                             │
│                                                                                 │
│  4. MCP CONTROL INTERFACE                                                       │
│     AI agents can query/modify both systems via MCP                            │
│     → Unified control plane for entire infrastructure                          │
│                                                                                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

### Network → Orchestration

```
WHAT NETWORK PROVIDES TO ORCHESTRATION:

┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  1. PEER DISCOVERY                                                              │
│     libp2p Kademlia DHT discovers nodes automatically                          │
│     → Orchestrator's ClusterManager doesn't need bootstrap lists              │
│                                                                                 │
│  2. SECURE MESSAGING                                                            │
│     Noise encryption + authenticated channels                                   │
│     → Orchestrator control messages are cryptographically secure               │
│                                                                                 │
│  3. GOSSIP PROTOCOL                                                             │
│     Gossipsub efficiently broadcasts cluster events                             │
│     → Orchestrator reconciliation loop receives events faster                  │
│                                                                                 │
│  4. REPUTATION SCORES                                                           │
│     Network tracks peer reliability via EMA scoring                            │
│     → Orchestrator scheduler weights nodes by trustworthiness                  │
│                                                                                 │
│  5. CREDIT LINES                                                                │
│     Mutual credit relationships between nodes                                   │
│     → Scheduler uses credit as resource allocation weight                      │
│                                                                                 │
│  6. NAT TRAVERSAL                                                               │
│     libp2p handles holepunching and relaying                                   │
│     → Orchestrator works across NATs without manual config                     │
│                                                                                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## Prerequisites

Before building the stack, ensure you have:

```bash
# Rust toolchain (stable + nightly for some features)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup install stable nightly
rustup default stable

# Required system packages (Ubuntu/Debian)
sudo apt update && sudo apt install -y \
    build-essential \
    pkg-config \
    libssl-dev \
    libclang-dev \
    protobuf-compiler

# Docker for container runtime tests
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Optional: youki OCI runtime for real containers
cargo install youki
```

---

## Building the Stack

### Step 1: Clone All Repositories

```bash
# Create workspace directory
mkdir -p ~/univrs && cd ~/univrs

# Clone all required repositories
git clone https://github.com/univrs/univrs-identity.git
git clone https://github.com/univrs/univrs-enr.git
git clone https://github.com/univrs/univrs-orchestration.git
git clone https://github.com/univrs/univrs-network.git

# Verify structure
ls -la
# Expected:
# univrs-identity/
# univrs-enr/
# univrs-orchestration/
# univrs-network/
```

### Step 2: Build Identity Foundation

```bash
# Build univrs-identity first (shared dependency)
cd ~/univrs/univrs-identity
cargo build --release
cargo test

echo "✓ Identity layer built"
```

### Step 3: Build ENR Economics

```bash
# Build ENR economic primitives
cd ~/univrs/univrs-enr
cargo build --release
cargo test

echo "✓ ENR economics layer built"
```

### Step 4: Build Network Layer

```bash
# Build the P2P network
cd ~/univrs/univrs-network
cargo build --workspace --release
cargo test --workspace

# Verify mycelial-node binary exists
ls -la target/release/mycelial-node

echo "✓ Network layer built"
```

### Step 5: Build Orchestration Layer

```bash
# Build the orchestrator with all features
cd ~/univrs/univrs-orchestration/orchestrator
cargo build --workspace --release --features full
cargo test --workspace

# Verify orchestrator_daemon binary exists
ls -la target/release/orchestrator_daemon

echo "✓ Orchestration layer built"
```

### Step 6: Verify Full Stack

```bash
#!/bin/bash
# verify-stack.sh

echo "=== Verifying Univrs.io Stack ==="

check_binary() {
    if [ -f "$1" ]; then
        echo "✓ $2"
    else
        echo "✗ $2 NOT FOUND: $1"
        exit 1
    fi
}

cd ~/univrs

check_binary "univrs-network/target/release/mycelial-node" "Mycelial Node"
check_binary "univrs-orchestration/orchestrator/target/release/orchestrator_daemon" "Orchestrator Daemon"

echo ""
echo "=== All components verified ==="
```

---

## Running the Network

### Option A: Single-Node Development

For local development and testing:

```bash
#!/bin/bash
# run-single-node.sh

# Terminal 1: Start network node
cd ~/univrs/univrs-network
RUST_LOG=info cargo run --release -p mycelial-node -- \
    --listen-addr /ip4/127.0.0.1/tcp/9000 \
    --dashboard-port 8080

# Terminal 2: Start orchestrator daemon
cd ~/univrs/univrs-orchestration/orchestrator
RUST_LOG=info cargo run --release --bin orchestrator_daemon --features full -- \
    --bind-address 0.0.0.0:9090 \
    --cluster-bind 0.0.0.0:9091

# Terminal 3: Verify
curl http://localhost:9090/health
curl http://localhost:8080/api/status
```

### Option B: Multi-Node Docker Cluster

For realistic multi-node testing:

```bash
#!/bin/bash
# Start a 3-node cluster using docker-compose

cd ~/univrs/univrs-orchestration/orchestrator

# Start the cluster
docker-compose up -d

# Verify all nodes are running
docker-compose ps

# Check logs
docker-compose logs -f

# Access endpoints:
# Bootstrap: http://localhost:9090
# Worker 1:  http://localhost:9091
# Worker 2:  http://localhost:9092

# Query cluster status
curl http://localhost:9090/api/cluster/nodes | jq

# Stop the cluster
docker-compose down
```

### Option C: Production Multi-Node Deployment

For production deployments across multiple machines:

```bash
#!/bin/bash
# run-production-node.sh
#
# Run this on each machine with appropriate configuration

# Required environment variables
export NODE_ID=$(cat /etc/univrs/node-id)  # Pre-generated Ed25519 key
export BOOTSTRAP_PEERS="/ip4/10.0.0.1/tcp/9000/p2p/12D3KooW..."

# Start network layer
~/univrs/univrs-network/target/release/mycelial-node \
    --identity-file /etc/univrs/identity.key \
    --listen-addr /ip4/0.0.0.0/tcp/9000 \
    --bootstrap "$BOOTSTRAP_PEERS" \
    --dashboard-port 8080 \
    --enable-enr \
    &

# Start orchestration layer
~/univrs/univrs-orchestration/orchestrator/target/release/orchestrator_daemon \
    --identity-file /etc/univrs/identity.key \
    --bind-address 0.0.0.0:9090 \
    --cluster-bind 0.0.0.0:9091 \
    --cluster-seeds "$BOOTSTRAP_PEERS" \
    --container-runtime youki \
    &

echo "Node started. Check status at http://localhost:9090/health"
```

---

## Comprehensive Use Case: Community Cloud

This section walks through a complete scenario demonstrating how the Univrs.io stack enables community-owned cloud infrastructure.

### Scenario Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                       COMMUNITY CLOUD DEPLOYMENT SCENARIO                                │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   PARTICIPANTS:                                                                          │
│   • Community Center (bootstrap node)                                                   │
│   • Library (worker node with spare compute)                                            │
│   • School (worker node with GPU)                                                       │
│   • Local Business (worker node with storage)                                           │
│   • Resident (light client consuming services)                                          │
│                                                                                          │
│   GOAL:                                                                                  │
│   Deploy a community web application across contributed resources,                      │
│   with costs distributed via mutual credit instead of cash payments.                    │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Step 1: Initialize Bootstrap Node (Community Center)

```bash
#!/bin/bash
# community-center.sh - Run on the community center server

# Generate node identity
mkdir -p /etc/univrs
univrs-identity generate > /etc/univrs/identity.key
NODE_ID=$(univrs-identity show /etc/univrs/identity.key)

echo "Community Center NodeId: $NODE_ID"

# Start as bootstrap node
cd ~/univrs/univrs-orchestration/orchestrator
cargo run --release --bin orchestrator_daemon --features full -- \
    --identity-file /etc/univrs/identity.key \
    --bind-address 0.0.0.0:9090 \
    --cluster-bind 0.0.0.0:9091 \
    --bootstrap-mode \
    --enable-mcp \
    --container-runtime mock  # or youki for real containers
```

### Step 2: Join Worker Nodes

```bash
#!/bin/bash
# library-node.sh - Run on the library server

BOOTSTRAP_ADDR="/ip4/192.168.1.10/tcp/9091"

# Generate identity
mkdir -p /etc/univrs
univrs-identity generate > /etc/univrs/identity.key

# Start as worker
cd ~/univrs/univrs-orchestration/orchestrator
cargo run --release --bin orchestrator_daemon --features full -- \
    --identity-file /etc/univrs/identity.key \
    --bind-address 0.0.0.0:9090 \
    --cluster-bind 0.0.0.0:9091 \
    --cluster-seeds "$BOOTSTRAP_ADDR" \
    --node-labels "role=compute,cpu=8,memory=16gb"
```

```bash
#!/bin/bash
# school-node.sh - Run on the school server

BOOTSTRAP_ADDR="/ip4/192.168.1.10/tcp/9091"

cd ~/univrs/univrs-orchestration/orchestrator
cargo run --release --bin orchestrator_daemon --features full -- \
    --identity-file /etc/univrs/identity.key \
    --bind-address 0.0.0.0:9090 \
    --cluster-bind 0.0.0.0:9091 \
    --cluster-seeds "$BOOTSTRAP_ADDR" \
    --node-labels "role=gpu,gpu=nvidia-t4,cuda=true"
```

### Step 3: Verify Cluster Formation

```bash
# From any node, check cluster status
curl http://localhost:9090/api/cluster/nodes | jq
```

Expected output:
```json
{
  "nodes": [
    {
      "id": "12D3KooW...",
      "address": "192.168.1.10:9091",
      "status": "Ready",
      "labels": { "role": "bootstrap" },
      "reputation": 1.0
    },
    {
      "id": "12D3KooX...",
      "address": "192.168.1.20:9091",
      "status": "Ready",
      "labels": { "role": "compute", "cpu": "8" },
      "reputation": 0.5
    },
    {
      "id": "12D3KooY...",
      "address": "192.168.1.30:9091",
      "status": "Ready",
      "labels": { "role": "gpu", "gpu": "nvidia-t4" },
      "reputation": 0.5
    }
  ]
}
```

### Step 4: Deploy a Workload via MCP

Use MCP (Model Context Protocol) to deploy a community web application:

```bash
# Using an MCP client (e.g., Claude Code, custom script)
# Send a workload deployment request

cat <<EOF | mcp-client --server localhost:9090
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "workload_deploy",
    "arguments": {
      "name": "community-portal",
      "containers": [
        {
          "name": "web",
          "image": "community/portal:latest",
          "ports": [{"containerPort": 80, "hostPort": 8080}],
          "resources": {"cpu": "500m", "memory": "256Mi"}
        }
      ],
      "replicas": 3,
      "labels": {
        "app": "portal",
        "tier": "frontend"
      }
    }
  },
  "id": 1
}
EOF
```

### Step 5: Watch Scheduling Decisions

The scheduler considers:
- Node resources (CPU, memory)
- Node reputation scores
- Mutual credit balances
- Label selectors

```bash
# Watch real-time events via WebSocket
websocat ws://localhost:9090/api/ws/events

# Or poll status
watch -n 2 'curl -s http://localhost:9090/api/workloads/community-portal | jq'
```

### Step 6: Observe Credit Flow

When nodes run containers, credits flow:

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                            MUTUAL CREDIT FLOW                                            │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   Workload Owner (Community)                                                             │
│        │                                                                                 │
│        │  Requests 3 replicas of community-portal                                       │
│        ▼                                                                                 │
│   ┌───────────────────┐                                                                 │
│   │  Scheduler        │                                                                 │
│   │                   │ Assigns to Library, School, Business                           │
│   └─────────┬─────────┘                                                                 │
│             │                                                                            │
│             ├──────────────────────────┐                                                │
│             │                          │                                                │
│   ┌─────────▼─────────┐     ┌──────────▼───────────┐                                   │
│   │  Library Node     │     │  School Node         │                                   │
│   │                   │     │                      │                                   │
│   │  Runs container   │     │  Runs container      │                                   │
│   │  Earns credit     │     │  Earns credit        │                                   │
│   │  +10 credits/hour │     │  +10 credits/hour    │                                   │
│   │                   │     │                      │                                   │
│   │  Can spend on:    │     │  Can spend on:       │                                   │
│   │  - GPU compute    │     │  - Storage space     │                                   │
│   │  - Storage        │     │  - Bandwidth         │                                   │
│   └───────────────────┘     └──────────────────────┘                                   │
│                                                                                          │
│   No cash changes hands. Contribution = access rights.                                  │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Step 7: Query Credits via Network API

```bash
# Check credit balances
curl http://localhost:8080/api/credits | jq

# Check credit lines between nodes
curl http://localhost:8080/api/credits/lines | jq

# Check reputation scores
curl http://localhost:8080/api/reputation | jq
```

---

## Operational Workflows

### Health Monitoring

```bash
#!/bin/bash
# health-check.sh

echo "=== Cluster Health ==="
curl -s http://localhost:9090/health | jq

echo ""
echo "=== Node Status ==="
curl -s http://localhost:9090/api/cluster/nodes | jq '.nodes[] | {id: .id[0:12], status: .status, reputation: .reputation}'

echo ""
echo "=== Workload Status ==="
curl -s http://localhost:9090/api/workloads | jq '.workloads[] | {name: .name, replicas: .replicas, running: .running_instances}'

echo ""
echo "=== Metrics ==="
curl -s http://localhost:9090/metrics | grep -E '^(orchestrator_|container_)'
```

### Scaling Workloads

```bash
# Scale up
curl -X PATCH http://localhost:9090/api/workloads/community-portal \
  -H "Content-Type: application/json" \
  -d '{"replicas": 5}'

# Scale down
curl -X PATCH http://localhost:9090/api/workloads/community-portal \
  -H "Content-Type: application/json" \
  -d '{"replicas": 2}'
```

### Node Maintenance

```bash
# Drain a node (graceful workload migration)
curl -X POST http://localhost:9090/api/nodes/12D3KooW.../drain

# Cordon a node (prevent new scheduling, keep existing)
curl -X POST http://localhost:9090/api/nodes/12D3KooW.../cordon

# Uncordon a node (allow scheduling again)
curl -X DELETE http://localhost:9090/api/nodes/12D3KooW.../cordon
```

### Viewing Logs

```bash
# Container logs
curl "http://localhost:9090/api/containers/abc123/logs?tail=100"

# Node logs (via journald)
journalctl -u orchestrator-daemon -f

# Network layer logs
journalctl -u mycelial-node -f
```

---

## Troubleshooting

### Common Issues

| Issue | Symptom | Resolution |
|-------|---------|------------|
| Nodes not discovering | Empty node list | Check firewall, verify bootstrap address |
| Scheduling failures | Workloads stuck in Pending | Verify node resources, check reputation thresholds |
| Container crashes | Repeated restarts | Check container logs, verify image exists |
| Credit transactions failing | Negative balances | Check credit line limits, reputation |
| High latency | Slow API responses | Check network partitions, gossip health |

### Debug Commands

```bash
# Check gossip connectivity
curl http://localhost:8080/api/peers | jq

# Force cluster resync
curl -X POST http://localhost:9090/api/cluster/resync

# Dump internal state
curl http://localhost:9090/debug/state | jq

# Check container runtime
docker ps  # or youki list
```

### Log Levels

```bash
# Enable debug logging
RUST_LOG=debug cargo run --release --bin orchestrator_daemon

# Specific module debugging
RUST_LOG=orchestrator_core=debug,cluster_manager=trace cargo run ...

# JSON structured logs for production
RUST_LOG=info RUST_LOG_FORMAT=json cargo run ...
```

---

## Summary

The Univrs.io collective architecture combines:

| Component | Role | Key Benefit |
|-----------|------|-------------|
| **univrs-identity** | Ed25519 self-sovereign identity | No central authority needed |
| **univrs-enr** | Economic primitives | Fair resource allocation |
| **univrs-network** | P2P connectivity | Decentralized communication |
| **univrs-orchestration** | Container management | Production workloads |

Together, they enable **community-owned cloud infrastructure** where:
- Resources flow based on contribution, not payment
- Trust is earned through reputation
- AI agents can autonomously manage infrastructure
- No single point of control or failure

*"Le réseau est Bondieu."*

---

*Last updated: January 2026*
