import { NoteList } from "../../containers/NoteList/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
export function NoteBrowse(props) {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const [searchTerm,setSearchTerm]=useState("");
  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    const containsContent = note.content
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    return containsTitle || containsContent;
  });
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4" >
          <SearchBar placeholder="Search your notes..." onTextChange={setSearchTerm} />
        </div>
      </div>
      {noteList?.length === 0 && (

        <div className="d-flex justify-content-center">
          <span>
            You don't have any notes, do you want to {" "}
            <Link to="/note/new">Create One</Link> </span></div>
      )}
      <NoteList noteList={filteredNoteList}/>
    </>
  );
}

//export const ProtectedNoteBrowse = withAuthRequired(NoteBrowse);