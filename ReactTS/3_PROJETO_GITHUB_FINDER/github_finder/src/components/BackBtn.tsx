import { useNavigate } from "react-router-dom";
import css from "./BackBtn.module.css";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <>
      <button className={css.back_btn} onClick={() => navigate(-1)}>
        Voltar
      </button>
    </>
  );
}

export default BackBtn;
