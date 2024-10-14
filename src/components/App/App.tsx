import { useEffect, useState } from "react";
import { fetchImages } from "../../Apiservice/apiService";
import { Image, Modaldata } from "../../Apiservice/apiService.type";


import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader"
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css"

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Modaldata>(null);
const [total, setTotal] = useState<number>(0);


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
        setError(true);

      } finally {
        setIsLoading(false);
      }

    }
    fetchData();
  }, [page, query])

  const openModal = (image: Image): void => {
    setIsOpen(true);
    setSelectedImage(image);
  } 

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  }
  
  const onHandleSubmit = (value: string): void => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
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


