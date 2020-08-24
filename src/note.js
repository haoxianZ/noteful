import React, { Component } from 'react';
import dataContext from './dataContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

class Note extends Component{

    static contextType=dataContext
    render(){
        
        const data=this.context
        console.log(this.props.match)
        const note= data.notes.find(n=>
            n.id === this.props.match.params.noteId)
            console.log(data)
        return(
            <dataContext.Consumer>{
                (context)=>(
                    <div className="note">
                <h2 className="noteTitle">
                    {note.name}
                </h2>
        <span>{note.modified}</span>
                <button className="deleteBtn"
                onClick={()=>{
                    deleteNoteRequest(note.id,context.deleteNote)
                }}>
                    <Link to='/'>
                        delete
                    </Link>
                    
                </button>
                <div>
                   {note.content.split(/\n \r|\n/).map(
                       (para,i)=><p key={i}>{para}</p>
                   )} 
                </div>
            </div>
                )}
                
            </dataContext.Consumer>
            
        )
    }
}
Note.propType={
    match: PropTypes.shape({
      params: PropTypes.object
    })
  }
export default Note