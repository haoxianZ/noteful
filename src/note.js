import React, { Component } from 'react';
import data from './data'

class Note extends Component{
    render(){
        console.log(this.props.match)
        const note= data.notes.find(n=>
            n.id === this.props.match.params.noteId)
        return(
            <div className="note">
                <h2 className="noteTitle">
                    {note.name}
                </h2>
        <span>{note.modified}</span>
                <button className="deleteBtn">
                    delete
                </button>
                <div>
                   {note.content.split(/\n \r|\n/).map(
                       (para,i)=><p key={i}>{para}</p>
                   )} 
                </div>
            </div>
        )
    }
}

export default Note