/**
 * Benchmark script for Local QVAC Inference
 */
import { runSovereignAudit } from '../auditLogic';

async function runBenchmark() {
  const startTime = Date.now();
  console.log("⏱️ Starting QVAC Performance Benchmark...");

  const result = await runSovereignAudit('./test-docs/sample-mandate.pdf');
  
  const endTime = Date.now();
  console.log(`
    Audit Complete:
    - Time Taken: ${(endTime - startTime) / 1000}s
    - Trust Score: ${result.verificationScore}%
    - Compliance: ${result.complianceStatus}
  `);
}

runBenchmark();
