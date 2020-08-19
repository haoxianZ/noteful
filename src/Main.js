import React, { Component } from 'react';
import { Route, Link, NavLink} from 'react-router-dom'
import dataContext from './dataContext';
import Sidebar from 'react-sidebar';
import'./Main.css';

function deleteNoteRequest(id,cb){
  fetch(`http://localhost:9090/notes/${id}`,{
      method:'DELETE',
      headers:{'context-type':'application/json'}
  }).then(res=>{
      if(!res.ok){return res.json().then(err=>{throw err})}
      return res.json()
  }).then(resJson=>{
      cb(id)
  }).catch(error=>{console.log(error)})
  
}
function deleteFolderRequest(id,cb){
  fetch(`http://localhost:9090/folders/${id}`,{
      method:'DELETE',
      headers:{'context-type':'application/json'}
  }).then(res=>{
      if(!res.ok){return res.json().then(err=>{throw err})}
      return res.json()
  }).then(resJson=>{
      cb(id)
  }).catch(error=>{console.log(error)})
  
}
export default class MainPage extends Component {
  static contextType=dataContext
  render(){
      const data=this.context
    return (
      <>
        <ul className='FolderList' className="folderList">
          {data.folders.map(folder =>
            <li key={folder.id}>
              <NavLink to={`/folder/${folder.id}`}>
                {folder.name}
              </NavLink>
              <button className={folder.id} onClick={()=>{
                 deleteFolderRequest(folder.id,data.deleteFolder)
              }}>
                delete
              </button>
            </li>
          )}
          <button >
            <Link to={`/addFolder`}>
              Add Folder
            </Link>
            </button>
        </ul>
        
        <ul className='List' style={{"textAlign":"center", 
      "listStyle":"none"}}>
          {data.notes.map(note =>
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
              <br/>
              Date modified {note.modified}
              <button className={note.id} onClick={()=>{
                 deleteNoteRequest(note.id,data.deleteNote)
              }}
               >delete</button>
            </li>
          )}
          <button>Add note</button>
        </ul>
      
         
      
     
     
      </>
    )
  }  
  
  }