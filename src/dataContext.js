import React from 'react';

const dataContext = React.createContext({
    folders:[],
    notes:[],
    deleteNote:()=>{},
    addFolder: ()=>{},
    deleteFolder:()=>{},
    addNote: ()=>{}
})

export default dataContext