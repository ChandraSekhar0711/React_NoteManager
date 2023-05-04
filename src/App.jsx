import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NoteAPI } from "./api/note-api";
import { setNoteList } from "./store/notes/note-slice";
import s from "./style.module.css"
function App() {
  const dispatch = useDispatch();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <>
      <Header />
      <div className={s.workspace}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
