import './GalleryListItem.css'
import {useState} from 'react';
import axios from 'axios'

function GalleryListItem ({item, getGalleryList}){
    let [liked, setLiked] = useState(0);


    const handleLike = () => {
        console.log('This was liked', item);
        const data = {
            isLiked: item.likes += 1
        }

        //PUT for LIKE
        axios.put(`/gallery/${item.id}`, data).then(response =>{
            console.log(response);
            //item.likes + 1;
            setLiked = data.isLiked;
            getGalleryList();
        }).catch(err => {
            console.log(err)
        })}
    return (
        <div className = "listItem">
            <div>
                {item.description}
                <img src={item.path}/>
            </div>
        <button onClick ={handleLike}>Like</button>
        <>Likes:{liked} </>
        </div>
    )
}

export default GalleryListItem