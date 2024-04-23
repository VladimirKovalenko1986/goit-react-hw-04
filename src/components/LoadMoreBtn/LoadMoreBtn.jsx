import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ text, onLoadMore }) {
  const handleLoadMore = () => {
    onLoadMore();
  };

  return (
    <div className={css.container}>
      <button onClick={handleLoadMore} className={css.button}>
        {text}
      </button>
    </div>
  );
}
