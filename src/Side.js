import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import data from './data';


export default function SidePage() {
    return (
      <>
        <ul className='FolderList'>
          {data.folders.map(folder =>
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>
                {folder.name}
              </Link>
            </li>
          )}
        </ul>
      </>
    )
  }