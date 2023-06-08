// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

// import axios from "axios"; 

function App() {
  const [activeNote, setActiveNote] = useState(false);
  const [notes, setNotes] = useState([]);

  // ローカルストレージから初期値を取得
  // const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))|| []);
  // ローカルストレージにnotesを保存
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3003/notes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, []);
  
  // useEffect(() => {
  //     // psqlから初期値を取得
  //   const fetchNotes = async () => {
  //     const response = await fetch("http://localhost:3003/notes").then(e => e.json());
  //     console.log(response);
  //     return response.data || [];
  //   };
  //   fetchNotes();
  // },[])

  const onAddNote = () => {
    console.log("新しいノートを追加");
    const newNote = {
      id : uuid(),
      title : "",
      content : "",
      updateDay : Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const OnDeleteNote = (id) => {
    const viewNotes = notes.filter((note) => note.id !== id); 
    setNotes(viewNotes);
  };

  const getActiveNote = () => notes.find(note => note.id === activeNote);

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        // console.log('updatedNote: ', updatedNote);
        return updatedNote;
      } else {
        return note;
      }
    });
    // console.log('updatedNotesArray: ', updatedNotesArray);
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar 
      onAddNote={onAddNote} 
      notes={notes} 
      OnDeleteNote={OnDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;

// useEffect(() => {
//   setActiveNote(notes[0].id);
//   // console.log('notes[0].id: ', notes[0].id);
// }, []);