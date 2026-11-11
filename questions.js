// Inhoud van de pagina. Antwoorden staan in Firestore per sleutel.
// Nieuwe vraag? Voeg een blok toe met een uniek id en zet de sleutel in STORE_KEYS.

export const STORE_KEYS = ["heen", "terug", "training", "potje", "padelNee", "tegen", "voetbal", "rijden", "pos", "_self", "_scout", "_doneAt"];

export const DEADLINE = "2026-11-20";          // invullen vóór (einde van deze dag)

// Wat al vaststaat (bovenaan en in het programma).
export const FIXED = [
  { t: "4 – 7 maart 2027", d: "Donderdag tot en met zondag" },
  { t: "Casa Pino, Alfàs del Pi", d: "€ 600 voor de groep, € 75 p.p." },
  { t: "Twee huurauto's", d: "" }
];

// Kai zet hier wat besloten is. Dit vult het programma.
// Voorbeeld:
// heen: "transavia", terug: "vueling", training: ["vr-och"], potje: ["za-mid"], tegen: "lokaal", voetbal: "ja",
// extra: [{ dag: "za", tijd: "20:00", wat: "Tapas in Altea" }]
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
  auto: [45.25, 45.25],     // Sunny Cars: 2 × € 181 all-in, gedeeld door 8
  brandstof: [12, 20],
  eten: [145, 185]
};

export const TRI = [
  { id: "graag", label: "Voorkeur" },
  { id: "kan", label: "Kan ook" },
  { id: "nee", label: "Kan niet" }
];

// Padelrooster
export const DAYS = [
  { id: "do", label: "Do", long: "Donderdag", date: "4 mrt" },
  { id: "vr", label: "Vr", long: "Vrijdag", date: "5 mrt" },
  { id: "za", label: "Za", long: "Zaterdag", date: "6 mrt" },
  { id: "zo", label: "Zo", long: "Zondag", date: "7 mrt" }
];
export const PARTS = [{ id: "och", label: "Ochtend" }, { id: "mid", label: "Middag" }];
export const OFF = { "do-och": "Reisdag", "zo-mid": "Naar huis" };
export const SLOT_LABEL = { "do-mid": "Do mid", "vr-och": "Vr och", "vr-mid": "Vr mid", "za-och": "Za och", "za-mid": "Za mid", "zo-och": "Zo och" };

export const SECTIONS = [
  { id: "vluchten", nr: "01", title: "Vluchten" },
  { id: "padel", nr: "02", title: "Padel" },
  { id: "voetbal", nr: "03", title: "Voetbal" },
  { id: "onderweg", nr: "04", title: "Onderweg" },
  { id: "scouting", nr: "05", title: "Scouting" }
];

export const QUESTIONS = [
  {
    id: "heen", section: "vluchten", type: "flight",
    title: "Heen: donderdag 4 maart",
    sub: "Amsterdam → Alicante. Geef per vlucht aan wat je ervan vindt. ‘Kan niet’ alleen als het echt niet kan.",
    options: [
      { id: "transavia", airline: "Transavia", dep: "09:40", arr: "12:20", detail: "’s Middags al op de baan" },
      { id: "vueling", airline: "Vueling", dep: "14:35", arr: "17:20", detail: "Aankomen, tapas, pils" }
    ],
    quips: { graag: "Genoteerd. De organisatie is geïnformeerd.", kan: "Flexibel! Daar houden we van.", nee: "Helder. Daar houden we rekening mee." }
  },
  {
    id: "terug", section: "vluchten", type: "flight",
    title: "Terug: zondag 7 maart",
    sub: "Alicante → Amsterdam.",
    options: [
      { id: "vueling", airline: "Vueling", dep: "18:05", arr: "21:00", detail: "" },
      { id: "transavia", airline: "Transavia", dep: "20:55", arr: "23:45", detail: "" }
    ],
    quips: { graag: "Nog één pils op het terras? Goede keuze.", kan: "Flexibel! Daar houden we van.", nee: "Maandag fris op kantoor. Verstandig." }
  },
  {
    id: "padel", section: "padel", type: "grid",
    title: "Wanneer wil je trainen of een potje spelen?",
    sub: "1× tikken = training · 2× = potje · 3× = allebei · 4× = liever niet. Training is 1,5 uur met trainer (ca. € 16–20), een potje 1,5 uur zelf spelen (ca. € 4,50)."
  },
  {
    id: "tegen", section: "padel", type: "single",
    title: "Tegen wie wil je spelen?",
    sub: "We kunnen via de club lokale spelers proberen te regelen.",
    options: [
      { id: "onderling", label: "Onderling", quip: "Vriendschap op het spel." },
      { id: "lokaal", label: "Lokale tegenstanders", quip: "Vamos!" },
      { id: "beide", label: "Allebei leuk", quip: "Alles mag, niets moet." }
    ]
  },
  {
    id: "voetbal", section: "voetbal", type: "single",
    title: "Zin in een voetbalwedstrijd?",
    sub: "Elche of Hércules moet dan thuis spelen op een moment dat past. Dat weten we pas 3 à 4 weken vooraf. Ticket ca. € 50–90.",
    options: [
      { id: "ja", label: "Ja, leuk", quip: "Vamos! Sjaal mee." },
      { id: "nee", label: "Nee, niet zo nodig", quip: "Meer tijd voor pils." }
    ]
  },
  {
    id: "rijden", section: "onderweg", type: "single",
    title: "Wil je rijden?",
    sub: "Twee huurauto's met 2 bestuurders per auto.",
    options: [
      { id: "graag", label: "Ja, prima", quip: "Held. Jij krijgt de beste plek op het terras." },
      { id: "moet", label: "Als het moet", quip: "Reservebestuurder genoteerd." },
      { id: "liever-niet", label: "Liever niet", quip: "Bijrijder met playlist-verantwoordelijkheid." },
      { id: "geen", label: "Geen rijbewijs", quip: "Achterbank it is." }
    ]
  }
];

// Scouting staat als laatste vraag; de inhoud bouwt index.html zelf op.
QUESTIONS.push({
  id: "scout", section: "scouting", type: "scout",
  title: "Jouw kaart",
  sub: "Kies je positie, schat jezelf in en speel de duels. Na de deadline worden de kaarten bekend gemaakt!"
});

export const GRID_QUIPS = { t: "Bandeja-bootcamp genoteerd.", p: "De interne ranking staat op het spel.", tp: "Volle bak. Fysio alvast gebeld?", nee: "Rust is ook training.", none: "Op een padelreis? Gedurfd." };

export const WHERE = [
  { g: "Reizen", from: "Vliegveld Alicante", to: "Casa Pino", time: "ca. 45 min" },
  { g: "Reizen", from: "Casa Pino", to: "Padelpoint La Nucía", time: "ca. 10 min" },
  { g: "Reizen", from: "Casa Pino", to: "Hércules, Alicante", time: "ca. 35 min" },
  { g: "Reizen", from: "Casa Pino", to: "Elche", time: "ca. 50 min" },
  { g: "Uitjes", from: "Casa Pino", to: "Albir", time: "ca. 5 min" },
  { g: "Uitjes", from: "Casa Pino", to: "Altea", time: "ca. 10 min" },
  { g: "Uitjes", from: "Casa Pino", to: "Benidorm", time: "ca. 15 min" },
  { g: "Uitjes", from: "Casa Pino", to: "Dénia", time: "ca. 45 min" }
];

export const IDEA_CATS = [
  { id: "avond", label: "Activiteit" },
  { id: "spel", label: "Spel" },
  { id: "eten", label: "Terras & restaurant" },
  { id: "overig", label: "Overig" }
];
