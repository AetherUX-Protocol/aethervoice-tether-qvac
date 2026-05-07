import { useState } from 'react';
import { runSovereignAudit } from '../../qvac-engine/auditLogic';

export const useSovereignAudit = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const performAudit = async (file) => {
    setLoading(true);
    try {
      const auditData = await runSovereignAudit(file);
      setResult(auditData);
      return auditData;
    } catch (error) {
      console.error("Audit Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { performAudit, loading, result };
};
