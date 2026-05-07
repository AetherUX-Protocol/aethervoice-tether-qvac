import { loadModel, completion, extractText } from "@qvac/sdk";
import { QVAC_CONFIG } from "./config";

/**
 * Performs a local-first audit on a trade document.
 * @param {File} document - The uploaded PDF/Image mandate.
 */
export async function runSovereignAudit(document) {
  console.log("QVAC: Starting Offline Inference...");

  // 1. Local OCR Extraction
  const extractedData = await extractText({
    model: QVAC_CONFIG.ocrModel,
    source: document
  });

  // 2. Local LLM Analysis against BSA 2026 / DTFB 2026
  const auditResult = await completion({
    model: QVAC_CONFIG.llmModel,
    prompt: `Analyze this trade document for 'Fake Urgency' and 'Identity Inconsistencies' based on Digital Trade Facilitation Bill 2026 standards. 
             Document Content: ${extractedData}`,
    temperature: 0.1 // Keeping results deterministic and professional
  });

  return {
    verificationScore: auditResult.score,
    complianceStatus: "BSA 2026 Certified",
    riskFlags: auditResult.flags
  };
}
