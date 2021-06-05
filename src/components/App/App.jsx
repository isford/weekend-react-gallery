import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList'
import GalleryListItem from '../GalleryItem/GalleryItem';
//import galleryItems from '../../../server/modules/gallery.data'
function App() {


  useEffect(() => {
    //getGalleryList()
  }, [])


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src=""/> */}
        < GalleryListItem />
        < GalleryList />
      </div>
    );
}

export default App;
