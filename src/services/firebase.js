import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
export class FirebaseApp {
  static firebaseapp = undefined;
  static auth = undefined;
  static db = undefined;
  static init() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    this.db = getFirestore(this.firebaseapp);
    //signInWithEmailAndPassword(this.auth,"chandrasekhar0711@gmail.com","Chandu@Cd4");
  }
}
