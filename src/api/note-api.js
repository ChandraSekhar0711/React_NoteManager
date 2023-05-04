import axios from "axios";

const BASE_URL = "http://localhost:3200/notes"

export class NoteAPI{
  static async create(note){
    return (await axios.post(`${BASE_URL}`,note)).data;
  }

  static async fetchAll(){
    //console.log("fetching: ",(await axios.get(`${BASE_URL}`)).data);
    return (await axios.get(`${BASE_URL}`)).data;
  }

  static async fetchById(noteId){
    return (await axios.get(`${BASE_URL}/${noteId}`)).data;
  }

  static async deleteById(noteId){
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(note){
    return (await axios.patch(`${BASE_URL}/${note.id}`,note)).data;
  }
}