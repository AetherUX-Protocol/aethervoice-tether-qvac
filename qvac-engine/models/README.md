# Local AI Models

This directory contains the local weights required for **Tether QVAC: AetherVoice**. 

### **Required Models**

1.  **Llama-3.2-1B-Instruct (GGUF)**:
    * **Filename**: `llama-3-2-1b-instruct-q4_0.gguf`
    * **Role**: Handles the local risk analysis and semantic compliance audits.
    * **Source**: Tether Distributed Model Registry or HuggingFace.

2.  **OCR Vision Model (ONNX)**:
    * **Filename**: `ocr-onnx-v1.onnx`
    * **Role**: Powers the offline document extraction for invoices and mandates.

### **Manual Installation**
If the automated `qvac fetch` command is not used, place the required files in this directory manually. Ensure the filenames match the definitions in `qvac-engine/config.js`.
