import React, { Component } from 'react';
import Note from './note';
import data from './data';
export default class NoteList extends Component{
    render(){
                console.log(this.props.match)

        const list = this.props.notes.map(
            note=> <li key = {note.id}>
                <Note name={note.name}
                content={note.content}
                modified={note.modified}/>

            </li>
        )
        return(
            <div>
                <ul>
                    {list}
                </ul>
                
                
            </div>
        )
    }
}

NoteList.defaultProps={
    notes:[]
}