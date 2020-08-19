import React, { Component } from 'react';
import { Route, Link, Switch, useHistory} from 'react-router-dom';
import MainPage from './Main';
import Folder from './folder';
import Sidebar from "react-sidebar";
import Note from './note';
import dataContext from './dataContext';
import AddFolder from './AddFolder';

class App extends Component {
  state = {
    folders:[],
    notes: [],
  };
  deleteNote= id=>{
    
    const newNoteList=this.state.notes.filter(note=>note.id!=id)
    this.setState({notes:newNoteList})
    
  }
  deleteFolder=id=>{
    
    const newList=this.state.folders.filter(note=>note.id!=id)
    this.setState({folders:newList})
    
  }

  componentDidMount() {
    // fake date loading from API call
    Promise.all([
        fetch(`http://localhost:9090/notes`),
        fetch(`http://localhost:9090/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
    
}
addFolder = folder => {
  this.setState({
    folders: [ ...this.state.folders, folder ],
  })
}
  render() {
    const contextValue= {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote:this.deleteNote,
      deleteFolder: this.deleteFolder,
      addFolder:this.addFolder
    }
    return (
      <div className='App'>
        <dataContext.Provider value={contextValue}>
          <Link to='/'><header>
          <h1 style={{"textAlign":"center"}}> Noteful</h1>
        </header></Link>
        
        
        <main>
          <Switch>
            <Route exact path="/" component={MainPage}
          />
          <Route
          path='/note/:noteId'
          component={Note}
          />
          <Route 
          path='/addFolder'
          component={AddFolder}
          />
          <Route path='/folder/:folderId' component={Folder}/>
          </Switch>
          
          
        
          
          
        </main>
        </dataContext.Provider>
          
        <footer>
          <p>© JZ, 2020. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
