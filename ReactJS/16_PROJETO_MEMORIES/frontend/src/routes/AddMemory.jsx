import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios-config";
import useToast from "../hooks/useToast";
import "./AddMemory.css";

function AddMemory() {
  //#region States
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);
  //#endregion

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
      return;
    } else {
      setInputs({
        ...inputs,
        [e.target.name]:
          e.target.id === "favorite" ? e.target.checked : e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("image", image);
    formData.append("favorite", inputs.favorite || false);

    try {
      const response = await axios.post("/memories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      useToast(response.data.message);

      navigate("/");
    } catch (error) {
      console.error("Erro ao adicionar memória:", error);
      useToast(
        `Erro ao adicionar memória: ${error.response?.data?.error || error.message}`,
        "error",
      );
    }
  };

  return (
    <div className="add-memory-page">
      <h2>Crie uma nova memória</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Título:</p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Informe um título para a memória"
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Descrição:</p>
          <textarea
            name="description"
            id="description"
            placeholder="Informe uma descrição para a memória"
            onChange={handleChange}
          />
        </label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="favorite"
            id="favorite"
            onChange={handleChange}
          />
          <p>Favoritar</p>
        </div>
        <label>
          <p>Foto:</p>
          <input type="file" name="image" id="image" onChange={handleChange} />
        </label>
        <input type="submit" value="Adicionar memória" className="btn" />
      </form>
    </div>
  );
}

export default AddMemory;
