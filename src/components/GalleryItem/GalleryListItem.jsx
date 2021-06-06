import './GalleryListItem.css'
import { useState } from 'react';
import axios from 'axios'

function GalleryListItem({ item, getGalleryList }) {
    //const [liked, setLiked] = useState(0);
    const [isHidden, setIsHidden] = useState(true);

    const handleLike = () => {
        console.log('This was liked', item);
        const newCount = item.likes +1
        const data = {
            isLiked: newCount
        }

        //PUT for LIKE
        axios.put(`/gallery/like/${item.id}`, data).then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="listItem">
            { isHidden ? (
                <div>
                    <img className="img-fluid rounded mx-auto d-block photo" src={item.path} />
                </div>
            ) : (
                    <div className= "description img-fluid rounded mx-auto d-block photo">
                    {item.description}
                </div>
            )}
            <button className="btn btn-secondary" onClick={() => setIsHidden(!isHidden)} >{!isHidden ? 'Show Photo' : 'Show Description'}</button>
            <button className="btn btn-secondary" onClick={handleLike}>Like</button>
            <div className="likeStyling">Likes:{item.likes} </div>
        </div>
    )
}

export default GalleryListItem