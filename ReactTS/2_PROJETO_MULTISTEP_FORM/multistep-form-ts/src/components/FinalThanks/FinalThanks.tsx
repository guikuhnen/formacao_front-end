import type { ReactElement } from "react";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import "./FinalThanks.css";

type FinalThanksProps = {
  data: { name: string; review: string; comment: string };
};

type EmojiObject = {
  [key: string]: ReactElement;
};

function FinalThanks({ data }: FinalThanksProps) {
  const emojiData: EmojiObject = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
  };

  return (
    <div className="final_thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom para a
        sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  );
}

export default FinalThanks;
