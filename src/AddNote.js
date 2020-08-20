import React, { Component } from  'react';
import dataContext from './dataContext';

export default class AddNote extends Component{
    static contextType=dataContext;
    handleSubmit=e=>{
            e.preventDefault()
            const newNote={
                name: e.target.noteName.value,
                content: e.target.content.value,
                folderId: e.target.noteFolderId.value,
                modified : new Date()
            }
            console.log(newNote)
            fetch(`http://localhost:9090/notes`,{
        method:'POST',
        body:JSON.stringify(newNote),
        headers:{'Content-Type':'application/json'}
    }).then(res=>{
        if(!res.ok){return res.json().then(err=>{throw err})}
        return res.json()
    }).then(resJson=>{
        console.log(resJson)
        this.context.addNote(resJson)
    }).catch(error=>{console.log(error)})

        }
    render(){
        const data = this.context;
        
        return(
            <div className="addFolder">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="noteName" >Note Name</label>
                    <input type='text' name="noteName"
                    id="noteName" required/>
                    <label htmlFor="content">Content</label>
                    <input type='text' name='content'>
                    </input>
                    <select name='noteFolderId'>
                        {data.folders.map(folder=>
                        <option value={folder.id} key={folder.id}>
                            {folder.name}
                        </option>

                        )}
                    </select>
                    <button type='submit'>
                        Add Note
                    </button>
                </form>
            </div>
        )
    }

}