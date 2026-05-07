import React from 'react';
import AuditInterface from '../components/AuditInterface';
import WDKSettlement from '../components/WDKSettlement';

const Dashboard = () => {
  return (
    <div className="p-8 bg-brand-dark min-h-screen text-brand-text">
      <h2 className="text-3xl font-bold mb-6">Sovereign Trade Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AuditInterface />
        <WDKSettlement />
      </div>
    </div>
  );
};

export default Dashboard;
