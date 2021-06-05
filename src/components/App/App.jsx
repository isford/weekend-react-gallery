import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
//import GalleryItem from '../GalleryItem/GalleryListItem';
import GalleryList from '../GalleryList/GalleryList'
//import GalleryListItem from '../GalleryItem/GalleryListItem';
//import galleryItems from '../../../server/modules/gallery.data'
function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryList()
  }, [])
  
  //GET GalleryList, SETS GALLERYLIST
  const getGalleryList = () => {
    console.log('Get GalleryList Triggered')
    axios.get('/gallery').then(response => {
      setGalleryList(response.data)
    }).catch(err => {
      console.log('Error in GET', err)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Places I've Been</h1>
        </header>
        <p className = "aboutPage">These are a few places that have shaped who I am today</p>
        {/* <img src=""/> */}
        {/* < GalleryListItem /> */}
        < GalleryList list={galleryList} getGalleryList={getGalleryList} />
      </div>
    );
}

export default App;
