import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, setDoc, addDoc, updateDoc, onSnapshot,
  serverTimestamp, arrayUnion, arrayRemove, getDoc, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const db = getFirestore(initializeApp(firebaseConfig));

// Reset: alles wat vóór dit moment is opgeslagen, telt niet meer mee (antwoorden, scouting en ideeën).
// Nieuwe reset? Zet hier de huidige tijd neer (UTC).
export const RESET_AT = Date.parse("2026-11-12T18:35:00Z");
const fresh = (ts) => !ts || ts.toMillis() >= RESET_AT;   // geen tijd = net zelf opgeslagen

export function listen(onData, onError) {
  return onSnapshot(collection(db, "answers"), (snap) => {
    const out = {};
    snap.forEach((d) => { const x = d.data(); if (fresh(x.updatedAt)) out[d.id] = x.answers || {}; });
    onData(out);
  }, onError);
}
export function save(id, name, answers) {
  return setDoc(doc(db, "answers", id), { name, answers, updatedAt: serverTimestamp() });
}

export function listenIdeas(onData, onError) {
  return onSnapshot(collection(db, "ideas"), (snap) => {
    const out = [];
    snap.forEach((d) => {
      const x = d.data();
      if (!fresh(x.createdAt)) return;
      out.push({ id: d.id, ...x, created: x.createdAt ? x.createdAt.toMillis() : Date.now() });
    });
    onData(out);
  }, onError);
}
export function addIdea(idea) {
  return addDoc(collection(db, "ideas"), {
    ...idea, helpers: [], gone: false, createdAt: serverTimestamp(), updatedAt: serverTimestamp()
  });
}
export function editIdea(id, fields) {
  return updateDoc(doc(db, "ideas", id), { ...fields, updatedAt: serverTimestamp() });
}
export function setHelper(id, person, on) {
  return updateDoc(doc(db, "ideas", id), {
    helpers: on ? arrayUnion(person) : arrayRemove(person), updatedAt: serverTimestamp()
  });
}

// ---------- Scouting: per persoon één document, id = "<naam>-<code>" ----------
export async function getScout(docId) {
  const s = await getDoc(doc(db, "scout", docId));     // weigert bij een verkeerde code
  if (!s.exists()) return null;
  const x = s.data();
  return fresh(x.updatedAt) ? x : { by: x.by, self: {}, duels: [] };
}
export function saveScout(docId, data) {
  return setDoc(doc(db, "scout", docId), { ...data, updatedAt: serverTimestamp() });
}
export async function listScout() {                     // pas toegestaan na de deadline
  const snap = await getDocs(collection(db, "scout"));
  const out = []; snap.forEach((d) => { const x = d.data(); if (fresh(x.updatedAt)) out.push(x); }); return out;
}
