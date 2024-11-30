import { Auth, DB, Storage } from "@/Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
  updatePassword,
} from "firebase/auth";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { generateRandomId } from "./generateRandomId";

export async function signOut() {
  Auth.signOut();
}
export async function CreateUser(email: string, password: string) {
  await createUserWithEmailAndPassword(Auth, email, password);
}
export async function signInEmail(email: string, password: string) {
  await signInWithEmailAndPassword(Auth, email, password);
}
export async function uploadImage(Path: string, image: File): Promise<string> {
  const filePath = `images/${Path}/${image.name}`;
  const newImageRef = ref(Storage, filePath);
  await uploadBytesResumable(newImageRef, image);
  return await getDownloadURL(newImageRef);
}
export async function UpdateDisplayName(user: User, name: string) {
  updateProfile(user, {
    displayName: name,
  });
}
export async function UpdateUseProfile(user: User, url: string) {
  updateProfile(user, {
    photoURL: url,
  });
}

type Docs =
  | "faq"
  | "refundPolicy"
  | "termsConditions"
  | "about"
  | "privacyPolicy";

export async function getDocument(ref: Docs) {
  if (ref === "faq") {
    const Questions = await getDocs(
      collection(DB, "docs", "_faq", "questions"),
    );
    return Questions.docs.map((doc) => doc.data());
  }
  const docRef = doc(collection(DB, "docs"), ref);
  const data = (await getDoc(docRef)).data();
  return data;
}
export async function SaveDocument(ref: Docs, content: any) {
  let updatedDocument = { content, modifiedAt: serverTimestamp() };
  const docRef = doc(collection(DB, "docs"), ref);
  const data = updateDoc(docRef, updatedDocument);
  return data;
}

type General = "SiteMetaData" | "_socialhandles";
export async function getGeneral(ref: General) {
  const docRef = doc(collection(DB, "general"), ref);
  const data = (await getDoc(docRef)).data();
  return data;
}
export async function getAddresses(ref: any) {
  const docRef = doc(collection(DB, "users"), ref);
  const data = (await getDoc(docRef)).data();
  return data;
}

type DATA = "users" | "products";
export async function getData(dt: DATA) {
  const data = (await getDocs(collection(DB, dt))).docs.map((doc) =>
    doc.data(),
  );
  return data;
}

export async function CreateQuestion(question: string, Answer: string) {
  let obj = {
    id: generateRandomId(),
    question: question,
    answer: Answer,
    createdAt: serverTimestamp(),
  };
  const docRef = doc(collection(DB, "docs", "_faq", "questions"));
  await setDoc(docRef, obj);
}

export async function DeleteQuestion(id: string) {
  const docRef = doc(collection(DB, "docs", "_faq", "questions", id));
  await deleteDoc(docRef);
}

export async function GetFaqQuestions() {
  const questions = (
    await getDocs(collection(DB, "docs", "_faq", "questions"))
  ).docs.map((doc) => {
    return {
      pid: doc.id,
      ...doc.data(),
    };
  });
  return questions;
}
export async function passwordChange(auth: User, pass: string) {
  updatePassword(auth, pass);
}

export async function GetProducts() {
  const products = (await getDocs(collection(DB, "products"))).docs.map((doc) =>
    doc.data(),
  );
  return products;
}
