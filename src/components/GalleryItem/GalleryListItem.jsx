import './GalleryListItem.css'
import {useState} from 'react';
import axios from 'axios'

function GalleryListItem ({item, getGalleryList}){
    const [liked, setLiked] = useState(0);

    const handleLike = () => {
        console.log('This was liked', item);
    }


    return (
        <div className = "listItem">
        <p>GALLERY LIST ITEM TEST</p>
            <div>
                {item.description}
                <img src={item.path}/>
            </div>
        <button onClick ={handleLike}>Like</button>
        </div>
    )
}

export default GalleryListItem