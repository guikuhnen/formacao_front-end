import "./EditPost.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogFetch from "../axios/config";

function EditPost() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  //#region getPost
  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      setTitle(response.data.title);
      setBody(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  //#endregion

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, body, userId: 1 };

    try {
      const response = await blogFetch.put(`/posts/${id}`, data);

      navigate(`/posts/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            id="body"
            name="body"
            placeholder="Digite o conteúdo"
            value={body || ""}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Editar post" className="btn" />
      </form>
    </div>
  );
}

export default EditPost;
