export const TRIP = { title: "Casa Pino 2027", start: "2027-03-04" };

// Posities op photo.jpg (1200 x 1600) als fractie: fx = x / breedte, fy = y / hoogte, r = straal / breedte.
export const PEOPLE = [
  { id: "tomba",      name: "Tomba",      fx: 0.181, fy: 0.350, r: 0.042 },
  { id: "niet-mee",   name: "Alsnog mee?", real: "Mitchell", going: false, fx: 0.304, fy: 0.356, r: 0.042 },
  { id: "dubbel-d",   name: "Dubbel-D",   fx: 0.379, fy: 0.331, r: 0.040 },
  { id: "babbels",    name: "Babbels",    fx: 0.451, fy: 0.350, r: 0.042 },
  { id: "kai",        name: "Kai",        fx: 0.554, fy: 0.338, r: 0.040 },
  { id: "toobs",      name: "Toobs",      fx: 0.617, fy: 0.328, r: 0.040 },
  { id: "melph",      name: "Melph",      fx: 0.729, fy: 0.359, r: 0.040 },
  { id: "raw-roya",   name: "Raw Roya",   fx: 0.821, fy: 0.347, r: 0.040 },
  { id: "yung-marie", name: "Yung Marie", fx: 0.607, fy: 0.619, r: 0.040 }
];

// Volgorde van de kaarten en het onderschrift.
export const ORDER = ["kai", "toobs", "babbels", "dubbel-d", "yung-marie", "tomba", "raw-roya", "melph"];
export const CAPTION = "Staand v.l.n.r.: Tomba, Mitchell, Dubbel-D, Babbels, Kai, Toobs, Melph en Raw Roya. Liggend: Yung Marie.";
