// Firebase for the web reader (/app). This is the project's public web-app
// config — the same values ship in every copy of the mobile app. Access is
// controlled by Firebase Auth and the Firestore security rules, not by
// keeping these secret.
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { connectAuthEmulator, getAuth, type Auth } from "firebase/auth";
import {
  connectFirestoreEmulator,
  getFirestore,
  type Firestore,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyC9886z6Kms6vepWJUu3T_cIgzyleB7WHY",
  authDomain: "services-b6f0d.firebaseapp.com",
  projectId: "services-b6f0d",
  storageBucket: "services-b6f0d.firebasestorage.app",
  messagingSenderId: "841680571694",
  appId: "1:841680571694:web:997b4adf8ec50b55727ebf",
};

function app(): FirebaseApp {
  return getApps()[0] ?? initializeApp(config);
}

// Test builds only (NEXT_PUBLIC_FIREBASE_EMULATOR=1 at build time): talk to
// local emulators instead of production. The live site is built without it.
const useEmulator = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR === "1";
let _auth: Auth | undefined;
let _db: Firestore | undefined;

export const auth = (): Auth => {
  if (!_auth) {
    _auth = getAuth(app());
    if (useEmulator) connectAuthEmulator(_auth, "http://127.0.0.1:9099");
  }
  return _auth;
};

export const db = (): Firestore => {
  if (!_db) {
    _db = getFirestore(app());
    if (useEmulator) connectFirestoreEmulator(_db, "127.0.0.1", 8181);
  }
  return _db;
};
