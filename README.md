# X-AI Chip Doctor
### VLSI Fault Detection & Optimization System

An AI-powered full-stack web application for analyzing simulated VLSI circuits — detecting faults, identifying timing anomalies, and suggesting power/delay optimizations with node-level explainability.

---

## Features

### Fault Detection Engine
- **Stuck-At Faults (SAF)** — Detects nodes permanently stuck at logic 0 or 1
- **Transition Faults** — Identifies slow-to-rise/fall transitions
- **Setup/Hold Violations** — Timing analysis for sequential elements
- **Power Hotspots** — High switching activity detection
- **Crosstalk & Noise** — Signal integrity analysis
- **Bridging Faults** — Unintended electrical coupling detection
- **Open Circuit** — Signal discontinuity detection

### Analysis Panels
| Panel | Description |
|-------|-------------|
| Dashboard | Health score, fault summary, critical path, projected improvements |
| Circuit View | Interactive SVG circuit topology with node status overlays |
| Fault Report | Filterable/sortable fault list with evidence and recommendations |
| Timing Analysis | Setup/hold slack charts, critical path waterfall |
| Power Analysis | Dynamic/static power breakdown, hotspot scatter plot |
| Optimizations | Ranked optimization recommendations with implementation steps |
| AI Explain | Node-level root cause analysis with waveform visualization |

### Test Scenarios
1. **Stuck-At Fault Detection** — Basic fault injection
2. **Timing Violation Analysis** — Sequential circuit timing
3. **Power Hotspot Detection** — High-activity nodes
4. **Crosstalk & Noise Analysis** — Signal integrity
5. **Full Chip Diagnostic Scan** — Comprehensive analysis

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install --prefix backend
npm install --prefix frontend

# Start backend (port 3001)
npm start --prefix backend

# Start frontend (port 3000) — in a new terminal
npm run dev --prefix frontend
```

Open **http://localhost:3000** in your browser.

---

## Architecture

```
x-ai-chip-doctor/
├── backend/
│   └── src/
│       ├── index.js              # Express API server
│       └── engine/
│           ├── circuitGenerator.js  # VLSI topology generator
│           ├── faultDetector.js     # Multi-model fault analysis
│           └── optimizer.js         # Optimization recommendations
└── frontend/
    └── src/
        ├── App.tsx               # Root component
        ├── api/client.ts         # API layer
        ├── hooks/useChipAnalysis.ts  # State management
        ├── types/index.ts        # TypeScript types
        └── components/
            ├── Header.tsx
            ├── Sidebar.tsx
            ├── Dashboard.tsx
            ├── CircuitViewer.tsx
            ├── FaultPanel.tsx
            ├── TimingPanel.tsx
            ├── PowerPanel.tsx
            ├── OptimizePanel.tsx
            ├── ExplainPanel.tsx
            ├── ScenarioModal.tsx
            └── LoadingOverlay.tsx
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Recharts, Vite
- **Backend**: Node.js, Express
- **Visualization**: SVG circuit rendering, Recharts (bar, pie, scatter, radial)
- **Fault Models**: SAF, TF, Setup/Hold, Power, Crosstalk, Bridging, Open

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Service health check |
| GET | `/api/circuit/generate?type=mixed&nodes=14` | Generate circuit |
| POST | `/api/circuit/analyze` | Analyze circuit with signals |
| POST | `/api/circuit/optimize` | Get optimization recommendations |
| GET | `/api/scenarios` | List test scenarios |
| POST | `/api/scenarios/:id/run` | Run a predefined scenario |
