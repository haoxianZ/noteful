import React, { Component } from 'react';
import { Route, Link, NavLink} from 'react-router-dom'
import dataContext from './dataContext';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
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

        <ul className={"folderList", 'List'}>
          <h3>Folders</h3>
          {data.folders.map(folder =>
            <li key={folder.id} className=''>
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
          <button className="addBtn">
            <Link to={`/addFolder`}>
              Add Folder
            </Link>
      </button>
        </ul>
      
        <ul className={'noteList', 'List'}>
        <h3 style={{'textAlign':'center'}}>Notes</h3>
          {data.notes.map(note =>
            <li key={note.id} className='noteListItem'>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
              Date modified {note.modified}
              <button 
              className={note.id} onClick={()=>{
                 deleteNoteRequest(note.id,data.deleteNote)
              }}
               >delete</button>
               <br/>
            </li>
          )}
          <button className='addNoteBtn'>
            <NavLink to='./addNote'>
              Add note
            </NavLink>
            
          </button>
        </ul>
      </>
    )
  }   
}

MainPage.propTypes={
  dataContext: PropTypes.object
}