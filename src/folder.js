import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import data from './data';
function  getNotesForFolder(FID){
    const noteList = data.notes.filter(note=> note.folderId === FID)
    return noteList
  }
  class Folder extends Component{
    render(){
        
        console.log(this.props.match)
        const folder= data.folders.find(n=>
            n.id === this.props.match.params.folderId);
        const noteList = getNotesForFolder(folder.id)
        return(
            <div className="note">
                <h2 className="noteTitle">
                    {folder.name}
                </h2>
                <button className="AddBtn">
                    ADD
                </button>
                <ul className='NoteList' style={{"text-align":"center", 
      "list-style":"none"}}>
          {noteList.map(note =>
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
            </li>
          )}
        </ul>
        </div>
        )
    }
}

export default Folder