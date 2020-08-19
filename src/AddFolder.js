import React, { Component } from  'react';
import dataContext from './dataContext';

export default class AddFolder extends Component{
    static contextType=dataContext;
    handleSubmit=e=>{
            e.preventDefault()
            const name=e.target.folder;
            console.log(name.value,name)
            fetch(`http://localhost:9090/folders`,{
        method:'POST',
        body:JSON.stringify(name.value),
        headers:{'context-type':'application/json'}
    }).then(res=>{
        if(!res.ok){return res.json().then(err=>{throw err})}
        return res.json()
    }).then(resJson=>{
        console.log(resJson)
        this.context.addFolder(resJson)
    }).catch(error=>{console.log(error)})

        }
    render(){
        const data = this.context;
        
        return(
            <div className="addFolder">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="folder" >Folder Name</label>
                    <input type='text' name="folder"
                    id="folder" required/>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}