export default function randomString(maxLength: number = 10): string {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = Math.floor(Math.random() * maxLength) + 1; // length 1..maxLength
  let result = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    result += chars[idx];
  }
  return result;
}

// const OTHER_USER = process.env.VISUAL_USER || randomString();
// console.log(OTHER_USER);

/**
 * Converts a price string like "$29.99" to a number (29.99).
 * Handles potential currency symbols or whitespace safely.
 */
export function extractNumericPart(text: string): number {
  if (!text) return 0;

  const cleanText = text.replace(/[^0-9.]/g, ""); // remove everything except digits and dot
  const numericValue = parseFloat(cleanText);

  if (isNaN(numericValue)) {
    throw new Error(`Invalid format: "${text}"`);
  }

  return numericValue;
}

/**
 * Converts an array of price strings (e.g. ["$19.99", "$49.99"]) to numeric values.
 */
export function mapTextToNumber(textArr: string[]): number[] {
  return textArr.map(extractNumericPart);
}
