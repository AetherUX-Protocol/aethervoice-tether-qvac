/**
 * Initializes the Local RAG database with BSA 2026 and DTFB 2026 Standards
 */
import { ragChunk, ragSaveEmbeddings } from "@qvac/sdk";
import fs from 'fs';

async function initRAG() {
  const legalData = fs.readFileSync('./legal-kb/BSA_2026_Standards.json', 'utf8');
  const chunks = await ragChunk(legalData, { size: 500 });

  await ragSaveEmbeddings({
    workspace: "aethervoice-compliance",
    documents: chunks
  });

  console.log("📚 Local Compliance RAG Initialized with 2026 Standards.");
}

initRAG();
