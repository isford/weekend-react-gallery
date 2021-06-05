import GalleryItem from '../GalleryItem/GalleryListItem';
import './GalleryList.css'

function GalleryList({ list, getGalleryList }) {
    return (
        <div className="flex">
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