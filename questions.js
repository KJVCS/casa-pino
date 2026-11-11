// De vragen. Nieuwe vraag toevoegen = een blok onderaan zetten met een nieuw, uniek id.
// Antwoorden staan in Firestore onder dat id, dus eerdere antwoorden blijven altijd staan.
// type: "single" (kies één), "multi" (kies meer), "text" (vrije tekst, niet verplicht).
// short: korte tekst voor het overzicht. exclusive: sluit de andere opties uit.

const SLOTS = [
  { id: "do-mid", short: "Do mid", label: "Donderdag middag", detail: "Alleen met de vroege vlucht" },
  { id: "vr-och", short: "Vr och", label: "Vrijdag ochtend" },
  { id: "vr-mid", short: "Vr mid", label: "Vrijdag middag" },
  { id: "za-och", short: "Za och", label: "Zaterdag ochtend" },
  { id: "za-mid", short: "Za mid", label: "Zaterdag middag" },
  { id: "zo-och", short: "Zo och", label: "Zondag ochtend", detail: "Voor we richting het vliegveld gaan" },
  { id: "geen",   short: "Liever niet", label: "Liever niet", exclusive: true }
];

export const QUESTIONS = [
  {
    id: "vlucht", section: "Vluchten", type: "single",
    title: "Welke vluchten heeft je voorkeur?",
    help: "Alle prijzen zijn per persoon, heen en terug. Kai boekt, op basis van wat de groep wil.",
    options: [
      { id: "transavia", short: "Transavia", label: "Transavia: vroeg heen, laat terug",
        detail: "Do 4 mrt 09:40–12:20 · zo 7 mrt 20:55–23:45 · € 254 p.p. Je hebt donderdagmiddag al padel. Thuis rond middernacht." },
      { id: "vueling", short: "Vueling", label: "Vueling: later heen, eerder terug",
        detail: "Do 4 mrt 14:35–17:20 · zo 7 mrt 18:05–21:00 · € 282 p.p. Donderdag is aankomen en eten. Zondag thuis rond 22:00." },
      { id: "maaktniet", short: "Maakt niet uit", label: "Maakt me niet uit" }
    ]
  },
  {
    id: "laat-thuis", section: "Vluchten", type: "single",
    title: "Hoe erg is thuiskomen rond middernacht op zondag?",
    help: "Alleen van belang voor de Transavia-terugvlucht.",
    options: [
      { id: "prima", short: "Prima", label: "Geen probleem" },
      { id: "liever-niet", short: "Liever niet", label: "Liever niet" },
      { id: "echt-niet", short: "Echt niet", label: "Echt niet, ik moet maandag vroeg op" }
    ]
  },
  {
    id: "training", section: "Padel", type: "multi", layout: "chips",
    title: "Wanneer wil je trainen?",
    help: "1,5 uur met trainer bij Padelpoint. Twee banen, twee trainers, dus vier per baan. Ca. € 16–20 p.p. per training. Meerdere dagdelen mag.",
    options: SLOTS
  },
  {
    id: "potje", section: "Padel", type: "multi", layout: "chips",
    title: "Wanneer wil je een potje spelen?",
    help: "1,5 uur zelf spelen op twee banen. Ca. € 4,50 p.p. per potje. Meerdere dagdelen mag.",
    options: SLOTS
  },
  {
    id: "voetbal", section: "Voetbal", type: "single",
    title: "Zin om op zondag naar een voetbalwedstrijd te gaan?",
    help: "Beide wedstrijden zijn op zondag 7 maart, op onze vertrekdag.",
    options: [
      { id: "elche", short: "Elche", label: "Ja, Elche – Málaga (LaLiga)",
        detail: "Aftrap volgt rond half februari · ± 50 min rijden · ticket ca. € 50–90. Alleen met een vroege aftrap." },
      { id: "hercules", short: "Hércules", label: "Ja, Hércules – Nàstic (Primera Federación)",
        detail: "Zondag 17:00 · ± 35 min rijden · klaar rond 18:50. Heel krap met een vlucht om 20:55." },
      { id: "voorwaarde", short: "Als het past", label: "Alleen als de aftrap past bij onze terugvlucht" },
      { id: "nee", short: "Nee", label: "Liever niet, ik pak liever padel of een terras" }
    ]
  },
  {
    id: "opmerking", section: "Overig", type: "text",
    title: "Nog iets wat Kai moet weten?",
    help: "Dieet, blessure, budget, eerder weg: alles mag."
  }
];
