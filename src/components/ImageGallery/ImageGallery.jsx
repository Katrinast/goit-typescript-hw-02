import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css"


export default function ImageGallery({images, openModal}) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => 
       <li key={image.id} className={css.galleryItem}>
          <ImageCard openModal={openModal} image={image} />
          </li>
      )}
    </ul>
  )
}

