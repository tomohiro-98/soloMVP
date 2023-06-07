import React from 'react';
import "./Main.css";
import {ReactMarkdown} from "react-markdown/lib/react-markdown";

const Main = ({activeNote, onUpdateNote}) => {

  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      upDateDay : Date.now(),
    });
  };

  if(!activeNote){
  return <div className='no-active-note'>No note selected</div>
  }

  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input
        id="title"
        type='text' 
        placeholder='New Title' 
        value={activeNote.title} 
        onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea 
        id="content" 
        placeholder='edit note' 
        value={activeNote.content} 
        onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className='preview-title'>{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  )
};

export default Main;