import React from 'react';

const dataContext = React.createContext({
    folders:[],
    notes:[],
    deleteNote:()=>{},
    addFolder: ()=>{},
    deleteFolder:()=>{}
})

export default dataContext