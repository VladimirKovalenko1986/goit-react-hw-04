import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchArticles } from "../../api-articles";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadeMoreBtn from "../LoadeMoreBtn/LoadeMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentLikes, setCurrentLikes] = useState(0);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getArticles() {
      try {
        setError(false);
        setIsloading(true);
        const data = await fetchArticles(query, page);
        setTotal(data.total);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data.results];
        });
      } catch (error) {
        setIsloading(false);
        setError(true);
      } finally {
        setIsloading(false);
      }
    }
    getArticles();
  }, [page, query]);

  const openModal = (imageUrl, likes) => {
    setCurrentImage(imageUrl);
    setCurrentLikes(likes);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className={css.conteiner}>
        <SearchBar onSearch={handleSearch} />
      </div>
      {error && <ErrorMessage />}
      {articles.length > 0 && (
        <ImageGallery items={articles} onImageClick={openModal} />
      )}
      {isloading && <Loader />}
      {articles.length > 0 && !isloading && articles.length < total && (
        <LoadeMoreBtn page={page} setPage={setPage} text="Loade More" />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={currentImage}
        likes={currentLikes}
        onClose={closeModal}
      />
    </div>
  );
}
