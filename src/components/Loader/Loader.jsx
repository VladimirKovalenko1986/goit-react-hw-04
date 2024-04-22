import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.conteiner}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
