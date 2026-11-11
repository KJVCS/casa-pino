// Opslag in Firestore. Eén document per persoon in de collectie "answers".
// De vragen staan NIET in de database (zie questions.js), dus nieuwe vragen
// kunnen later worden toegevoegd zonder dat eerdere antwoorden verdwijnen.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, onSnapshot, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const db = getFirestore(initializeApp(firebaseConfig));

export function listen(onData, onError) {
  return onSnapshot(collection(db, "answers"), (snap) => {
    const out = {};
    snap.forEach((d) => { out[d.id] = (d.data().answers) || {}; });
    onData(out);
  }, onError);
}

export function save(id, name, answers) {
  return setDoc(doc(db, "answers", id), { name, answers, updatedAt: serverTimestamp() });
}
