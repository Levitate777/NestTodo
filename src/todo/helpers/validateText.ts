export function validateText(text) {
  return text.trim().replace(/s+/g, ' ');
}
