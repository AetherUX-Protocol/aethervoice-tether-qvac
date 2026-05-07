import React, { useState } from 'react';
import AuditInterface from './components/AuditInterface';
import WDKSettlement from './components/WDKSettlement';
import './App.css'; // You can add custom styling here

function App() {
  const [auditResult, setAuditResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tether QVAC: AetherVoice</h1>
        <div className="sovereign-badge">OFFLINE: SILICON-TO-CHAIN ACTIVE</div>
      </header>

      <main className="dashboard">
        <section className="audit-section">
          <AuditInterface onAuditComplete={(data) => setAuditResult(data)} />
        </section>

        <section className="settlement-section">
          {/* This only appears once QVAC verifies the transaction */}
          <WDKSettlement auditData={auditResult} />
        </section>
      </main>

      <footer>
        <p>Built for the Tether QVAC Frontier Track | Secured by Solana</p>
      </footer>
    </div>
  );
}

export default App;
