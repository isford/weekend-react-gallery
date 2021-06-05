import './GalleryListItem.css'
import {useState} from 'react';
import axios from 'axios'

function GalleryListItem ({item, getGalleryList}){
    const [liked, setLiked] = useState(0);

    const handleLike = () => {
        console.log('This was liked', item);
    }


    return (
        <div>
        <p>GALLERY LIST ITEM TEST</p>
        <button onClick ={handleLike}>Like</button>
        </div>
    )
}

export default GalleryListItem