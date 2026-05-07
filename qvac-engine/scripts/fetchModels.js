/**
 * Script to automate model fetching via QVAC P2P or HTTPS
 */
import { downloadAsset } from "@qvac/sdk";
import fs from 'fs';

const MODELS = [
  { name: 'llama-3-2-1b', url: 'https://models.tether.io/llama-3.2-1b-q4.gguf' },
  { name: 'ocr-engine', url: 'https://models.tether.io/ocr-v1.onnx' }
];

async function setup() {
  console.log("🚀 Starting AetherVoice Model Sync...");
  
  for (const model of MODELS) {
    const path = `./models/${model.name}`;
    if (!fs.existsSync(path)) {
      console.log(`Downloading ${model.name}...`);
      await downloadAsset(model.url, path);
    }
  }
  console.log("✅ All models ready for Sovereign Audit.");
}

setup();
