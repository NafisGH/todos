export const TODOS_STORAGE_KEY = "todos";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDocs,
  writeBatch,
  doc,
  serverTimestamp,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUC5lunv28wNR99APoP-gjfwM2B1Etl4Q",
  authDomain: "todo-b6f6a.firebaseapp.com",
  projectId: "todo-b6f6a",
  storageBucket: "todo-b6f6a.appspot.com",
  messagingSenderId: "784812739856",
  appId: "1:784812739856:web:ca2161868776c5dbfe2995",
};

export function createStorage(key) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return {
    key,
    db,
    pull: async function () {
      // Это вариант без сортировки
      // const q = query(citiesRef, orderBy("name"), limit(3));
      // const querySnapshot = await getDocs(collection(this.db, this.key));
      // const todos = [];

      // Это вариант с сортировкой Order and limit data
      const ref = collection(this.db, this.key);
      const q = query(ref, orderBy("createdAdd")); // Добавить "desc"  Это сортировка реверс
      const querySnapshot = await getDocs(q);
      const todos = [];

      querySnapshot.forEach((doc) => {
        todos.push({
          id: doc.id,
          title: doc.data().title,
          done: doc.data().done,
        });
      });
      return todos;
    },

    push: async function (todo) {
      try {
        await setDoc(doc(this.db, this.key, todo.id), {
          title: todo.title,
          done: todo.done,
          createdAdd: serverTimestamp(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

    delete: async function (todos) {
      const batch = writeBatch(db);
      todos.forEach((todo) => {
        const ref = doc(this.db, this.key, todo.id);
        batch.delete(ref);
      });
      await batch.commit();
    },
    // Принимает то тудушку которую нужно обновить
    update: async function (todo) {
      const ref = doc(this.db, this.key, todo.id);

      await updateDoc(ref, {
        done: todo.done,
      });
    },
  };
}
