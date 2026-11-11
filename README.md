# Casa Pino 2027: keuzepagina

Statische pagina (GitHub Pages) + Firebase Firestore voor de antwoorden.

## Nieuwe vraag toevoegen
Voeg een blok toe onderaan QUESTIONS in `questions.js` met een nieuw, uniek `id`. Oude antwoorden blijven staan.

## Eenmalig: Firestore-regels
Firebase console → Firestore Database → Rules → inhoud van `firestore.rules` plakken → Publish.

## Publiceren
GitHub: nieuwe publieke repo `casa-pino`, alle bestanden uit deze map uploaden (ook `.nojekyll`).
Settings → Pages → Deploy from branch → main / (root). Na ±1 minuut staat de pagina op https://<gebruikersnaam>.github.io/casa-pino/
