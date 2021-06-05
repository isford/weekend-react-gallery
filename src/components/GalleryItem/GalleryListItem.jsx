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
            //setLiked = data.isLiked;
            getGalleryList();
        }).catch(err => {
            console.log(err)
        })
    }



    // const handleToggleDescription = () => {
    //     { isHidden ? (<div>{item.description}</div>) : (<div></div>)}
    //     }


    return (
        <div className="listItem">
            { isHidden ? (
                <div>
                    <img src={item.path} />
                </div>
            ) : (
                <div>
                    {item.description}
                </div>
            )}
            <button onClick={() => setIsHidden(!isHidden)} >{!isHidden ? 'Show Photo' : 'Show Description'}</button>
            <button onClick={handleLike}>Like</button>
            <>Likes:{item.likes} </>
        </div>
    )
}

export default GalleryListItem