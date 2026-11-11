// Padelkaarten. De scores komen uit de scouting (duels), en worden pas na de deadline zichtbaar.
export const STATS = [
  ["aan", "AAN", "Aanval", "smash en bandeja"],
  ["ver", "VER", "Verdediging", "glaswerk en lobs"],
  ["inz", "INZ", "Inzicht", "slim spelen, positie"],
  ["pil", "PIL", "Derde helft", "herstelvermogen na afloop"]
];
export const DUELS_PER_STAT = 4;               // per persoon, per stat
export const REVEAL = "2026-11-19T00:00:00Z";  // na de deadline gaan de scores open (moet gelijk zijn aan de Firestore-regels)
export const POSITIONS = [
  { id: "DRV", label: "Rechts (drive)" },
  { id: "REV", label: "Links (revés)" },
  { id: "ALL", label: "Maakt niet uit" }
];
