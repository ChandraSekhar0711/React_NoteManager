import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { FirebaseApp } from "../services/firebase";

//const BASE_URL = "http://localhost:3200/notes"

export class NoteAPI {
  static async create(formValues) {
    const rersponse = await addDoc(collection(FirebaseApp.db,"notes"), formValues);
    return {
      id: rersponse.id,
      ...formValues,
    }
  }

  static async fetchAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "asc")
    );
    const response = await getDocs(q);
    return response.docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }

  static async fetchById(noteId) {}

  static async deleteById(noteId) {
    deleteDoc(doc(FirebaseApp.db, "notes", noteId));
  }

  static async updateById(id, values) {
    const query = doc(FirebaseApp.db, "notes", id);
    await updateDoc(query, values);
    return {
      id,
      ...values,
    }
  }
  static onShouldSyncNotes(onChange){
    const q = query(collection(FirebaseApp.db, "notes"));
    const unSub = onSnapshot(q,(querySnapshot) => {
      const isUserPerformingChange = querySnapshot.metadata.hasPendingWrites
      //console.log("you are not synced with the notes collection");
      !isUserPerformingChange && onChange();
    });
    return unSub;
  }
}

/* 

static async create(formValues){
    return this.formatId((await axios.post(`${BASE_URL}`,formValues)).data);
  }

  static async fetchAll(){
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static async fetchById(noteId){
    return this.formatId((await axios.get(`${BASE_URL}/${noteId}`)).data);
  }

  static async deleteById(noteId){
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(id,values){
    return this.formatId((await axios.patch(`${BASE_URL}/${id}`,values)).data);
  }
  static formatId(note){
    return{
      ...note,id:note.id.toString(),
    };
  }

*/
