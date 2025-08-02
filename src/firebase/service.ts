import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  addDoc,
  setDoc,
  getDoc,
  increment,
  collection
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const counterRef = doc(db, "counter", "visits");

export async function incrementCounter(): Promise<number> {
  await setDoc(counterRef, { count: increment(1) }, { merge: true });
  const snapshot = await getDoc(counterRef);
  const count = snapshot.data()?.count || 0;
  return count;
}

export async function handleForm({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): Promise<boolean> {
  if (!name.trim()) {
    throw new Error("Name is required.");
  }
  if (!email.trim()) {
    throw new Error("Email is required.");
  }
  if (!message.trim()) {
    throw new Error("Message is required.");
  }

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });
    return true;
  } catch (error) {
    console.error("Error adding message:", error);
    return false;
  }
}
