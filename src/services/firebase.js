import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export class FirebaseApp {
  static firebaseapp = undefined;
  static auth = undefined;
  static init() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    //signInWithEmailAndPassword(this.auth,"chandrasekhar0711@gmail.com","Chandu@Cd4");
  }
}
