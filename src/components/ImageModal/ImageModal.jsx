import Modal from 'react-modal';
import { FaWindowClose } from "react-icons/fa";


import css from "./ImageModal.module.css"


const customStyles = {
   overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.70)",
    },
  content: {
    top: "20px",
      bottom: "20px",
      left: "50%",
      right: "auto",
      transform: "translate(-50%, 0)",
  },
};

Modal.setAppElement('#root');


export default function ImageModal({ isOpen, onRequestClose, image }) {
 
  if (!image) {
    return null; 
  }

  const { likes, urls, alt_description, description, user: { name, location } } = image;
  
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
    >
      <div>
        <button className={css.btn} onClick={onRequestClose}><FaWindowClose size="24px" /></button>
        </div>
      <img src={urls.regular} alt={alt_description} />
      <h3 className={css.description}>{description}</h3>
      <div className={css.wrapper}>
        <p><span>Likes:</span> {likes}</p>
        {name && <p><span>Name:</span> {name}</p>}
      {location && <p><span>Location:</span> {location}</p>}
        
      </div>
    </Modal>
  );
}