// Common magic byte definitions in Hex
const MAGIC_NUMBERS: Record<string, string> = {
  "89504e47": "image/png",
  ffd8ff: "image/jpeg",
  "25504446": "application/pdf",
  "504b0304": "application/zip (or DOCX/XLSX/APK)",
  "47494638": "image/gif",
};

export async function checkFile(file: File) {
  // Slice only the first 8 bytes
  const blob = file.slice(0, 8);
  const buffer = await blob.arrayBuffer();
  const uint8Array = new Uint8Array(buffer);

  // Convert bytes to hex string
  const hex = Array.from(uint8Array)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // Match Signature
  let matchedType = "Unknown File Type";
  for (const [signature, mime] of Object.entries(MAGIC_NUMBERS)) {
    if (hex.startsWith(signature)) {
      matchedType = mime;
      break;
    }
  }
  return matchedType;
}
