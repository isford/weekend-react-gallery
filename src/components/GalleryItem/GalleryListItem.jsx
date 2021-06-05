import './GalleryListItem.css'
import {useState} from 'react';
import axios from 'axios'

function GalleryListItem ({item, getGalleryList}){
    let [liked, setLiked] = useState(0);

    const handleLike = () => {
        console.log('This was liked', item);
        //setLiked +=1;

        const data = {
            isLiked: item.likes
        }

        //PUT for LIKE
        axios.put(`/gallery/${item.id}`, data).then(response =>{
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err)
        })

    return (
        <div className = "listItem">
        <p>GALLERY LIST ITEM TEST</p>
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