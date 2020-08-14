import React, { Component } from 'react';
import { Route, Link, NavLink} from 'react-router-dom'
import data from './data';
import Sidebar from 'react-sidebar';

export default function MainPage() {
    return (
      <>
      <Sidebar 
      sidebar={<b>Sidebar content</b>}>
      <ul className='FolderList'>
          {data.folders.map(folder =>
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>
                {folder.name}
              </Link>
            </li>
          )}
          <button>Add Folder</button>
        </ul>
      </Sidebar>
        <ul className='NoteList' style={{"text-align":"center", 
      "list-style":"none"}}>
          {data.notes.map(note =>
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
            </li>
          )}
          <button>Add note</button>
        </ul>
      </>
    )
  }