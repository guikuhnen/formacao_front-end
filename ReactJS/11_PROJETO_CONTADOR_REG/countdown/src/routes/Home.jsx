import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownContext } from "../context/CountdownContext";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("#000000");

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };

    setEvent(eventObject);

    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título: </span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título do evento"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Data do evento: </span>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Imagem: </span>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Insira a URL da imagem"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor: </span>
          <input
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
