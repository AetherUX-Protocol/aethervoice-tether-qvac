### 🛠 Technical Integration: The QVAC Stack

AetherVoice is built from the ground up to utilize **Tether's QVAC SDK** for sovereign, on-device intelligence. 

- **Local OCR Engine**: We utilize `@qvac/ocr-onnx` to extract text from scanned refinery mandates and B2B invoices without cloud dependency.
- **Sovereign RAG**: Using `@qvac/embed-llamacpp`, AetherVoice generates local vector embeddings of the **BSA 2026 Evidence Rules**, ensuring every audit is legally grounded.
- **WDK Settlement**: After local verification, we bridge to **Solana** via `@tetherto/wdk-wallet-solana` to trigger secure USDt payments.
- 3. The "Secret Ingredient": The Installation Guide
To prove your project is real, include a "Quick Start" that shows you've actually used the Tether tools:
# 1. Install the QVAC SDK
npm install @qvac/sdk

# 2. Add the Tether WDK for Solana
npm install @tetherto/wdk @tetherto/wdk-wallet-solana

# 3. Launch the local audit engine
npm run start:qvac
