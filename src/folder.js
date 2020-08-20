import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import dataContext from './dataContext';
function deleteNoteRequest(id,cb){
  fetch(`http://localhost:9090/notes/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
  }).then(res=>{
      if(!res.ok){return res.json().then(err=>{throw err})}
      return res.json()
  }).then(resJson=>{
      cb(id)
  }).catch(error=>{console.log(error)})
  
}

  
  class Folder extends Component{
    static contextType=dataContext
    render(){
      const data = this.context
      function  getNotesForFolder(FID){
        const noteList = data.notes.filter(note=> note.folderId === FID)
        return noteList
      }
        console.log(this.props.match)
        console.log(data.folders)
        const folder= data.folders.find(n=>
            n.id === this.props.match.params.folderId);
            console.log(folder)
        const noteList = getNotesForFolder(folder.id)
        return(
            <div className="note">
                <Link to={'/'}>
                    <button> Back</button> 
                    +
                </Link>
                <h2 className="noteTitle">
                    {folder.name}
                </h2>
                <button className="AddBtn">
                  <Link to='/addNote'>
                   ADD Note
                   </Link>
                   
                </button>
                <ul className='NoteList' style={{"textAlign":"center", 
      "listStyle":"none"}}>
          {noteList.map(note =>
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
              <button className="noteInFoler"
              onClick={()=>{
                deleteNoteRequest(note.id,data.deleteNote)
             }}
              > 
              Delete

              </button>
            </li>
          )}
        </ul>
        </div>
        )
    }
}

export default Folder