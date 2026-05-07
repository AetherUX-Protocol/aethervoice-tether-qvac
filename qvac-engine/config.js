/**
 * QVAC Local Model Configuration
 * This ensures all inference stays on-device.
 */

export const QVAC_CONFIG = {
  llmModel: "llama-3-2-1b-instruct-q4_0.gguf", // Local GGUF path
  ocrModel: "ocr-onnx-v1.onnx",               // Local ONNX path for document scanning
  device: "vulkan",                           // Uses local GPU for instant inference
  precision: "int4",                          // Optimizing for speed on edge hardware
  ragDatabase: "./legal-kb/bsa-2026.db"       // Path to local BSA 2026 legal embeddings
};
