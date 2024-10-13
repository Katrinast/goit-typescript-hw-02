import { useEffect, useState } from "react";
import { fetchImages } from "../../apiService";


import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader"
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css"

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
const [total, setTotal] = useState(0);


  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        
        const { results, total} = await fetchImages(query, page);
      setTotal(total);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        
      } catch (error) {
        setError(error);

      } finally {
        setIsLoading(false);
      }

    }
    fetchData();
  }, [page, query])

  const openModal = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  } 

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  }
  
  const onHandleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(null);
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  
  return (
    <div className={css.wrapper}>
    <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && <ImageGallery openModal={openModal} images={images} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {isEmpty && <p>No results found for your search query.</p>}
      {images.length > 0 && !isLoading && page < total && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage} />}
      </div>
      )
}


