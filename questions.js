// Inhoud van de pagina. Antwoorden staan in Firestore per sleutel.
// Nieuwe vraag? Voeg een blok toe met een uniek id en zet de sleutel in STORE_KEYS.

export const STORE_KEYS = ["heen", "terug", "training", "potje", "padelNee", "tegen", "voetbal", "rijden", "pos", "_self", "_scout", "_doneAt"];

export const DEADLINE = "2026-11-18";          // invullen vóór (einde van deze dag)

// Wat al vaststaat (bovenaan en in het programma).
export const FIXED = [
  { t: "4 – 7 maart 2027", d: "Donderdag tot en met zondag" },
  { t: "Casa Pino, Alfàs del Pi", d: "€ 600 voor de groep, € 75 p.p." },
  { t: "Twee huurauto's", d: "Voor de hele reis" }
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
  rest: [190, 255]
};

export const TRI = [
  { id: "graag", label: "Graag" },
  { id: "kan", label: "Kan" },
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
    quips: { graag: "Genoteerd. Kai ziet het.", kan: "Flexibel. Kai houdt van je.", nee: "Helder. Daar houden we rekening mee." }
  },
  {
    id: "terug", section: "vluchten", type: "flight",
    title: "Terug: zondag 7 maart",
    sub: "Alicante → Amsterdam.",
    options: [
      { id: "vueling", airline: "Vueling", dep: "18:05", arr: "21:00", detail: "Thuis rond 22:00" },
      { id: "transavia", airline: "Transavia", dep: "20:55", arr: "23:45", detail: "Thuis rond middernacht" }
    ],
    quips: { graag: "Nog één pils op het terras? Goede keuze.", kan: "Flexibel. Kai houdt van je.", nee: "Maandag fris op kantoor. Verstandig." }
  },
  {
    id: "padel", section: "padel", type: "grid",
    title: "Wanneer wil je trainen of een potje spelen?",
    sub: "Tik op een vakje om te wisselen: training, potje, allebei of kan niet. Training: 1,5 uur met trainer, ca. € 16–20. Potje: 1,5 uur zelf spelen, ca. € 4,50."
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
  },
  {
    id: "rijden", section: "onderweg", type: "single",
    title: "Wil je rijden?",
    sub: "Twee huurauto's, dus minstens twee bestuurders. Wie rijdt, drinkt die dag wat minder pils.",
    options: [
      { id: "graag", label: "Ja, graag", quip: "Held. Jij krijgt de beste plek op het terras." },
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
  sub: "Kies je positie, schat jezelf in en speel de duels. Je stemt anoniem: tot de deadline kan niemand de stemmen zien, ook Kai niet. Daarna gaan alle kaarten tegelijk open."
});

export const GRID_QUIPS = { t: "De trainer gaat je dropshot ontleden.", p: "Gewoon lekker ballen.", tp: "Volle bak. Fysio alvast gebeld?", nee: "Prima, dan lig je bij het zwembad.", none: "Op een padelreis? Gedurfd." };

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
