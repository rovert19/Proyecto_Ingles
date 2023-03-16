import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase-config";

const collectionName = "mywords";

export const addWord = (newWord) =>
  addDoc(collection(db, collectionName), newWord);

export const updateWord = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const getWords = () => getDocs(collection(db, collectionName));

export const deleteWord = (id) => deleteDoc(doc(db, collectionName, id));
