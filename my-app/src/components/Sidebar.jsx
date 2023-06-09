import React from 'react'
import "./Sidebar.css";

const Sidebar = ({
    onAddNote, 
    notes, 
    OnDeleteNote, 
    activeNote, 
    setActiveNote,
}) => {

  const sortedNotes = notes.sort((a, b) => b.updateDay - a.updateDay);

  // 検討中
//   const handleAddNote = async () => {
//     try {
//       const newNote = {
//         title: 'New Note Title',
//         content: 'New Note Content',
//         updateDay: Date.now(),
//       };
  
//       const response = await fetch('/notes', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newNote),
//       });
  
//       if (response.ok) {
//         const insertedNote = await response.json();
//         console.log(insertedNote);
//       } else {
//         console.error('Failed to add note');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>note</h1>
            {/* <button onClick={onAddNote}>追加</button> */}
            <button onClick={onAddNote} >追加</button>
        </div>
        <div className='app-sidebar-notes'>
            {sortedNotes.map((note) => (
                <div 
                className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                key={note.id} 
                onClick={() => setActiveNote(note.id)}
                >
                <div className='sidebar-note-title'>
                    <strong>{note.title}</strong>
                    <button onClick={() => OnDeleteNote(note.id)}>削除</button>
                </div>
                <p>{note.content}</p>
                <small>{new Date (note.updateDay).toLocaleDateString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}</small>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Sidebar