import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";

export default function ImageModal({ isOpen, imageUrl, onClose, likes }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(css.bodyOverflow);
    } else {
      document.body.classList.remove(css.bodyOverflow);
    }

    return () => {
      document.body.classList.remove(css.bodyOverflow);
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      style={customStyles}
    >
      <div className={css.wrapper}>
        <img src={imageUrl} alt="Large Image" className={css.img} />
        <div className={css.conteiner}>
          <b className={css.text}>Likes:</b>
          <b className={css.text}>{likes}</b>
        </div>
      </div>
    </Modal>
  );
}
