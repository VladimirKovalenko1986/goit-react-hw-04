import css from "./LoadeMoreBtn.module.css";

export default function LoadeMoreBtn({ text, page, setPage }) {
  const handleLoadeMore = () => {
    setPage(page + 1);
  };
  return (
    <div className={css.conteiner}>
      <button onClick={handleLoadeMore} className={css.button}>
        {text}
      </button>
    </div>
  );
}
