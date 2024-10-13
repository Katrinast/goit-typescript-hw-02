import css from "./ImageCard.module.css"

export default function ImageCard({ image, openModal }) {
  return (
    <div className={css.imgWrapper} onClick={() => {openModal(image)}}>
      <img className={css.galleryImg} src={image.urls.small} alt={image.alt_description} />
    </div>

  )
}