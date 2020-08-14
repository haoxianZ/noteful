import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainPage from './Main';
import NoteList from './noteList';
import Folder from './folder';
import Sidebar from "react-sidebar";
import Note from './note';
import data from './data';

class App extends Component {
  render() {
   
    return (
      <div className='App'>
        <nav>
          <Link to='/'><header>
          <h1 style={{"textAlign":"center"}}> Noteful</h1>
        </header></Link>
        </nav>
        
        <main>
          <Route exact path="/" component={MainPage}
          />
          <Route path='/folder/:folderId' component={Folder}/>
          <Route
          path='/note/:noteId'
          component={Note}
          />
        
          
          
        </main>
        <footer>
          <p>© JZ, 2020. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
