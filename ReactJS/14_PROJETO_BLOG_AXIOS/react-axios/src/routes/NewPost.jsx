import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogFetch from "../axios/config";
import "./NewPost.css";

function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, body, userId: 1 };

    try {
      const response = await blogFetch.post("/posts", data);

      navigate(`/posts/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            id="body"
            name="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar post" className="btn" />
      </form>
    </div>
  );
}

export default NewPost;
