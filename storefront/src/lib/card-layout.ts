// Exactly three product-card sizes that tessellate with NO empty gaps.
//
// Each row contains cards of a SINGLE size, so every card in a row is the
// same width -> the same height, and each row fills all 12 columns:
//   • lg  = one full-width card   (span 12)
//   • md  = two cards per row      (span 6 each)
//   • sm  = three cards per row    (span 4 each)
// Any count is packed into complete rows, so nothing is ever left dangling.
export type Size = "lg" | "md" | "sm";

// express n as a sequence of 3s and 2s (rows of small / medium), interleaved
function packRows(n: number): number[] {
  if (n < 2) return [];
  let threes: number;
  let twos: number;
  const m = n % 3;
  if (m === 0) {
    threes = n / 3;
    twos = 0;
  } else if (m === 2) {
    threes = (n - 2) / 3;
    twos = 1;
  } else {
    // m === 1 (n >= 4 here)
    threes = (n - 4) / 3;
    twos = 2;
  }
  const rows: number[] = [];
  while (threes > 0 || twos > 0) {
    if (threes > 0) {
      rows.push(3);
      threes -= 1;
    }
    if (twos > 0) {
      rows.push(2);
      twos -= 1;
    }
  }
  return rows;
}

export function buildLayout(n: number): Size[] {
  if (n <= 0) return [];
  if (n === 1) return ["lg"];

  const cards: Size[] = [];
  let remaining = n;

  // lead with a full-width large piece when there's room for variety
  if (n >= 4) {
    cards.push("lg");
    remaining = n - 1;
  }

  for (const row of packRows(remaining)) {
    for (let k = 0; k < row; k += 1) cards.push(row === 3 ? "sm" : "md");
  }
  return cards;
}
