// Lightweight inline formatter for plain strings held in config (e.g. the home
// intro). Markdown files don't need this — the markdown processor already
// handles emphasis — but config strings aren't run through markdown, so we give
// them a small, predictable subset here. Order matters: longest markers first.
//
//   ***x***  → bold italic (mauve)      **x** → bold
//   *x*      → emphasis (pink italic)    _x_  → highlight (orange italic)
//   ==x==    → highlighter mark          `x`  → inline code
export function formatInline(text: string) {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/==([^=]+)==/g, '<mark>$1</mark>')
    .replace(/_([^_]+)_/g, '<span class="highlight">$1</span>');
}
