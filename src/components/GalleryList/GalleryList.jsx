import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({ list, getGalleryList }) {
    return (
        <div className="flex">
            <p>GALLERY LIST TEST</p>
            {list.map(item => {
                return (
                    <GalleryItem getGalleryList={getGalleryList}
                        key={item.id}
                        item={item}
                    />
                )
            })}
        </div>
    )
}

export default GalleryList