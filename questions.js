// Vragen staan hier; antwoorden staan in Firestore per vraag-id.
// Nieuwe vraag? Voeg een blok toe met een nieuw, uniek id.

const SLOTS = [
  { id: "do-mid", short: "Do mid", label: "Do middag", detail: "Alleen met de vroege heenvlucht" },
  { id: "vr-och", short: "Vr och", label: "Vr ochtend" },
  { id: "vr-mid", short: "Vr mid", label: "Vr middag" },
  { id: "za-och", short: "Za och", label: "Za ochtend" },
  { id: "za-mid", short: "Za mid", label: "Za middag" },
  { id: "zo-och", short: "Zo och", label: "Zo ochtend", detail: "Voor vertrek naar het vliegveld" },
  { id: "geen",   short: "Liever niet", label: "Liever niet", exclusive: true }
];

// Retourprijzen per persoon (Smart / basis, zoals vergeleken). Enkele reis = schatting.
export const FLIGHT = {
  transavia: { name: "Transavia", ret: 254 },
  vueling:   { name: "Vueling",   ret: 282 },
  oneWay: [0.5, 0.65]   // enkele reis als fractie van een retour (indicatie)
};

// Ramingen per persoon voor het kostenblok.
export const COSTS = {
  training: [16, 20],          // per training van 1,5 uur, bij volle banen
  potje: [4.5, 4.5],           // per potje van 1,5 uur
  voetbal: [50, 90],           // ticket
  verblijf: [75, 75],          // Casa Pino, € 600 / 8
  rest: [190, 255]             // auto's, brandstof, eten & drinken
};

export const QUESTIONS = [
  {
    id: "heen", section: "vluchten", type: "single", layout: "chips",
    title: "Welke heenvlucht?",
    help: "Donderdag 4 maart, Amsterdam → Alicante.",
    options: [
      { id: "transavia", short: "Transavia 09:40", label: "Transavia 09:40", detail: "Landt 12:20 · middag al padel" },
      { id: "vueling", short: "Vueling 14:35", label: "Vueling 14:35", detail: "Landt 17:20 · aankomen en eten" },
      { id: "maakt-niet-uit", short: "Maakt niet uit", label: "Maakt niet uit" }
    ]
  },
  {
    id: "terug", section: "vluchten", type: "single", layout: "chips",
    title: "Welke terugvlucht?",
    help: "Zondag 7 maart, Alicante → Amsterdam.",
    options: [
      { id: "vueling", short: "Vueling 18:05", label: "Vueling 18:05", detail: "Landt 21:00 · thuis rond 22:00" },
      { id: "transavia", short: "Transavia 20:55", label: "Transavia 20:55", detail: "Landt 23:45 · thuis rond middernacht" },
      { id: "maakt-niet-uit", short: "Maakt niet uit", label: "Maakt niet uit" }
    ]
  },
  {
    id: "training", section: "padel", type: "multi", layout: "chips",
    title: "Wanneer wil je trainen?",
    help: "1,5 uur met trainer bij Padelpoint La Nucía, twee banen en twee trainers. Ca. € 16–20 p.p. per training. Meerdere dagdelen mag.",
    options: SLOTS
  },
  {
    id: "potje", section: "padel", type: "multi", layout: "chips",
    title: "Wanneer wil je een potje spelen?",
    help: "1,5 uur zelf spelen op twee banen. Ca. € 4,50 p.p. per potje. Meerdere dagdelen mag.",
    options: SLOTS
  },
  {
    id: "tegen", section: "padel", type: "single", layout: "chips",
    title: "Tegen wie wil je spelen?",
    help: "We kunnen proberen via de club lokale spelers te regelen.",
    options: [
      { id: "onderling", short: "Onderling", label: "Onderling" },
      { id: "lokaal", short: "Lokale tegenstanders", label: "Lokale tegenstanders" },
      { id: "beide", short: "Allebei leuk", label: "Allebei leuk" }
    ]
  },
  {
    id: "voetbal", section: "voetbal", type: "single", layout: "chips",
    title: "Zin om naar een voetbalwedstrijd te gaan?",
    help: "Elche (LaLiga) en Hércules (Primera Federación) spelen op 35 à 50 minuten rijden. Dan moet een van beide thuis spelen op een dag en tijd die in ons schema past. Dat weten we pas zo'n 3 à 4 weken vooraf. Ticket ca. € 50–90.",
    options: [
      { id: "ja", short: "Ja", label: "Ja, leuk" },
      { id: "nee", short: "Nee", label: "Nee, niet zo nodig" }
    ]
  }
];

export const IDEA_CATS = [
  { id: "eten", label: "Eten & drinken" },
  { id: "avond", label: "Avond" },
  { id: "spel", label: "Spel" },
  { id: "overig", label: "Overig" }
];
