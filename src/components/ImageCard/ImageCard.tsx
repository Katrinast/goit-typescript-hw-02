import css from "./ImageCard.module.css"
import { Image } from "../../Apiservice/apiService.type"
import { ReactElement } from "react";

interface Props {
  image: Image;
  openModal: (image: Image) => void;
}

export default function ImageCard({ image, openModal }: Props) :ReactElement{
  return (
    <div className={css.imgWrapper} onClick={(): void => {openModal(image)}}>
      <img className={css.galleryImg} src={image.urls.small} alt={image.alt_description} />
    </div>

  )
}