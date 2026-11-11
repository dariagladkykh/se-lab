// Dictionary of event types. Each key is a name: it appears in the Event type dropdown,
// and its color is used for every block with that name.
// `kind` is the default when the type is picked: "pin" (fixed) or "slot" (flexible).
// Add a name here to give it a fixed color.
// Colors are spread across hues so neighbouring types don't look alike.
export const EVENT_TYPES = {
  aMW: { color: "#5f3dc4", kind: "pin" }, // indigo
  sMW: { color: "#1971c2", kind: "pin" }, // blue
  laBAD1: { color: "#2f9e44", kind: "pin" }, // green
  laBAD2: { color: "#a9e34b", kind: "pin" }, // lime
  Recruit1: { color: "#f76707", kind: "pin" }, // orange
  sRecruit2: { color: "#a61e4d", kind: "pin" }, // maroon
  Vacation: { color: "#fcc419", kind: "pin" }, // yellow
  "Exam Session": { color: "#7f1d1d", kind: "pin" }, // dark red
  wLGA: { color: "#74c0fc", kind: "pin" }, // light blue
  aLGA: { color: "#da77f2", kind: "pin" }, // light purple
  sLGA: { color: "#63e6be", kind: "pin" }, // mint
  "1stObs": { color: "#ffa8a8", kind: "pin" }, // light salmon
  BESTEM: { color: "#8d5a2b", kind: "pin" }, // brown
  RoM: { color: "#e64980", kind: "pin" }, // pink
  RoJAM: { color: "#15aabf", kind: "pin" }, // cyan
  stamp: { color: "#868e96", kind: "pin" }, // gray
  // OTB: company's choice of event, flexible until it is locked.
  OTB: { color: "#e03131", kind: "slot" } // red
};

// Names without an entry above (older blocks, free-typed titles) get a stable color from a palette.
const FALLBACK_PALETTE = ["#364fc7", "#0b7285", "#862e9c", "#5c940d", "#e8590c", "#495057", "#c2255c", "#087f5b"];

// Color for a block: its event type if it has one, otherwise its title.
export function colorFor(item) {
  const key = item.category || item.title || "";
  if (Object.hasOwn(EVENT_TYPES, key)) return EVENT_TYPES[key].color;
  let hash = 0;
  for (const ch of key) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length];
}

// Translucent version of a "#rrggbb" color, for block backgrounds.
export function tint(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
