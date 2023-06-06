import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {ProtectedApp} from "./App";
import { Provider } from "react-redux";
import { store,persistor } from "./store";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteBrowse } from "./Pages/NoteBrowse/NoteBrowse";
import { Note } from "./Pages/Note/Note";
import { NoteCreate } from "./Pages/NoteCreate/NoteCreate";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { Signin } from "./Pages/Signin/Signin";
import { Signup } from "./Pages/Signup/Signup";
import { FirebaseApp } from "./services/firebase";
import { PersistGate } from "redux-persist/integration/react";
FirebaseApp.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<ProtectedApp />}>
              <Route path="/" element={<NoteBrowse />} />
              <Route path="/note/:noteId" element={<Note />} />
              <Route path="/note/new" element={<NoteCreate />} />
              <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
