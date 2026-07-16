// Editorial grid rhythm: cycles card spans + aspect ratios so the layout
// alternates large and small pieces instead of a monotone uniform grid.
// Each pair of cycle steps sums to 12 columns, so rows stay clean.
export type CardLayout = { feature: boolean; cls: string };

const CYCLE = [
  "c7 tall",
  "c5 xtall",
  "c5 short",
  "c7 tall",
  "c6 tall",
  "c6 xtall",
];

export function cardLayout(
  index: number,
  total: number,
  allowFeature = true,
): CardLayout {
  const withFeature = allowFeature && total >= 5;
  if (withFeature && index === 0) return { feature: true, cls: "" };
  const idx = withFeature ? index - 1 : index;
  return { feature: false, cls: CYCLE[idx % CYCLE.length] };
}
