import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUC5lunv28wNR99APoP-gjfwM2B1Etl4Q",
  authDomain: "todo-b6f6a.firebaseapp.com",
  projectId: "todo-b6f6a",
  storageBucket: "todo-b6f6a.appspot.com",
  messagingSenderId: "784812739856",
  appId: "1:784812739856:web:ca2161868776c5dbfe2995",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addDataToFirestore() {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      title: "Задача 3",
      status: "active",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getData() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
  });
}

// addDataToFirestore();
getData()
