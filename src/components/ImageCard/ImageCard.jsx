import css from "./ImageCard.module.css";

export default function ImageCard({
  data: {
    urls: { small, raw },
    alt_description,
    likes,
  },
  onImageClick,
}) {
  const handleImageClick = () => {
    onImageClick(raw, likes);
  };
  return (
    <div className={css.conteiner}>
      <img
        src={small}
        alt={alt_description}
        className={css.img}
        onClick={handleImageClick}
      />
    </div>
  );
}
