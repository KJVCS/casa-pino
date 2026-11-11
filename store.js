import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, setDoc, addDoc, updateDoc, onSnapshot,
  serverTimestamp, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const db = getFirestore(initializeApp(firebaseConfig));

export function listen(onData, onError) {
  return onSnapshot(collection(db, "answers"), (snap) => {
    const out = {};
    snap.forEach((d) => { out[d.id] = d.data().answers || {}; });
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
