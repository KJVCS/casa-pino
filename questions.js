// Inhoud van de pagina. Antwoorden staan in Firestore per sleutel (id).
// Nieuwe vraag? Voeg een blok toe met een nieuw, uniek id en zet het id in STORE_KEYS.

export const STORE_KEYS = ["heen", "terug", "training", "potje", "tegen", "voetbal", "_doneAt"];

// Kai zet hier wat definitief is, bv. { heen: "transavia", voetbal: "ja" }.
export const DECISIONS = {};

// Retourprijzen p.p. Enkele reis = schatting als fractie van een retour.
export const FLIGHT = {
  transavia: { name: "Transavia", ret: 254 },
  vueling:   { name: "Vueling",   ret: 282 },
  oneWay: [0.5, 0.65]
};

// Ramingen p.p. voor "Wat kost het jou?"
export const COSTS = {
  training: [16, 20],
  potje: [4.5, 4.5],
  voetbal: [50, 90],
  verblijf: [75, 75],
  rest: [190, 255]
};

// Padelrooster: dagen x dagdelen. Leeg = kan niet.
export const DAYS = [
  { id: "do", label: "Do", date: "4 mrt" },
  { id: "vr", label: "Vr", date: "5 mrt" },
  { id: "za", label: "Za", date: "6 mrt" },
  { id: "zo", label: "Zo", date: "7 mrt" }
];
export const PARTS = [{ id: "och", label: "Ochtend" }, { id: "mid", label: "Middag" }];
export const OFF = { "do-och": "Reisdag", "zo-mid": "Naar huis" };
export const SLOT_LABEL = { "do-mid": "Do mid", "vr-och": "Vr och", "vr-mid": "Vr mid", "za-och": "Za och", "za-mid": "Za mid", "zo-och": "Zo och" };

export const SECTIONS = [
  { id: "vluchten", nr: "01", title: "Vluchten" },
  { id: "padel", nr: "02", title: "Padel" },
  { id: "voetbal", nr: "03", title: "Voetbal" }
];

export const QUESTIONS = [
  {
    id: "heen", section: "vluchten", type: "flight",
    title: "Heen: donderdag 4 maart",
    sub: "Amsterdam → Alicante",
    options: [
      { id: "transavia", airline: "Transavia", dep: "09:40", arr: "12:20", detail: "’s Middags al op de baan", quip: "Vroege vlucht. Respect." },
      { id: "vueling", airline: "Vueling", dep: "14:35", arr: "17:20", detail: "Aankomen, tapas, pils", quip: "Uitslapen en toch op tijd voor de tapas." }
    ],
    any: { id: "maakt-niet-uit", label: "Maakt me niet uit", quip: "Flexibel. Kai houdt van je." }
  },
  {
    id: "terug", section: "vluchten", type: "flight",
    title: "Terug: zondag 7 maart",
    sub: "Alicante → Amsterdam",
    options: [
      { id: "vueling", airline: "Vueling", dep: "18:05", arr: "21:00", detail: "Thuis rond 22:00", quip: "Maandag fris op kantoor. Verstandig." },
      { id: "transavia", airline: "Transavia", dep: "20:55", arr: "23:45", detail: "Thuis rond middernacht", quip: "Nog één pils op het terras. Goede keuze." }
    ],
    any: { id: "maakt-niet-uit", label: "Maakt me niet uit", quip: "Flexibel. Kai houdt van je." }
  },
  {
    id: "padel", section: "padel", type: "grid",
    title: "Wanneer wil je trainen of een potje spelen?",
    sub: "Tik op een vakje om te wisselen. Training: 1,5 uur met trainer, ca. € 16–20. Potje: 1,5 uur zelf spelen, ca. € 4,50."
  },
  {
    id: "tegen", section: "padel", type: "single",
    title: "Tegen wie wil je spelen?",
    sub: "We kunnen via de club lokale spelers proberen te regelen.",
    options: [
      { id: "onderling", label: "Onderling", quip: "Vriendschap op het spel." },
      { id: "lokaal", label: "Lokale tegenstanders", quip: "Spanjaarden inmaken. Of andersom." },
      { id: "beide", label: "Allebei leuk", quip: "Alles mag, niks moet." }
    ]
  },
  {
    id: "voetbal", section: "voetbal", type: "single",
    title: "Zin in een voetbalwedstrijd?",
    sub: "Elche of Hércules moet dan thuis spelen op een moment dat past. Dat weten we pas 3 à 4 weken vooraf. Ticket ca. € 50–90.",
    options: [
      { id: "ja", label: "Ja, leuk", quip: "Sjaal mee." },
      { id: "nee", label: "Nee, niet zo nodig", quip: "Meer tijd voor pils." }
    ]
  }
];

export const GRID_QUIPS = { t: "De trainer gaat je dropshot ontleden.", p: "Gewoon lekker ballen.", tp: "Volle bak. Fysio alvast gebeld?", none: "Op een padelreis? Gedurfd." };

export const WHERE = [
  { from: "Vliegveld Alicante", to: "Casa Pino", time: "ca. 45 min" },
  { from: "Casa Pino", to: "Padelpoint La Nucía", time: "ca. 10 min" },
  { from: "Casa Pino", to: "Hércules, Alicante", time: "ca. 35 min" },
  { from: "Casa Pino", to: "Elche", time: "ca. 50 min" }
];

export const IDEA_CATS = [
  { id: "eten", label: "Eten & drinken" },
  { id: "avond", label: "Avond" },
  { id: "spel", label: "Spel" },
  { id: "overig", label: "Overig" }
];
