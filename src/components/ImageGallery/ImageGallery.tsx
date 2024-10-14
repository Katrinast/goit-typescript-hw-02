import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../Apiservice/apiService.type";
import css from "./ImageGallery.module.css"
import { ReactElement } from "react";

interface Props {
  images: Image[];
  openModal: (image: Image) => void;
}

export default function ImageGallery({images, openModal}: Props): ReactElement{
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

