import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios-config";
import useToast from "../hooks/useToast";
import "./Memory.css";

function Memory() {
  const { id } = useParams();

  //#region States
  const [memory, setMemory] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  //#endregion

  //#region Busca a memória pelo ID
  useEffect(() => {
    const fetchMemory = async () => {
      try {
        const response = await axios.get(`/memories/${id}`);
        setMemory(response.data);
        // Carrega os comentários da memória
        setComments(response.data.comments);
      } catch (error) {
        console.error(`Erro ao buscar memória ${id}:`, error);
        useToast(
          `Erro ao buscar memória ${id}: ${error.response?.data?.error || error.message}`,
          "error",
        );
      }
    };

    fetchMemory();
  }, []);

  if (!memory) return <p>Carregando...</p>;
  //#endregion

  //#region Envia o comentário
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !text) {
      useToast("Por favor, preencha todos os campos do comentário.", "error");
      return;
    }

    try {
      const response = await axios.patch(`/memories/${id}/comment`, {
        name,
        text,
      });

      const latestComment = response.data.memory.comments.pop();
      setComments((prevComments) => [...prevComments, latestComment]);

      setName("");
      setText("");
      useToast(response.data.message);
    } catch (error) {
      console.error(`Erro ao enviar comentário:`, error);
      useToast(
        `Erro ao enviar comentário: ${error.response?.data?.error || error.message}`,
        "error",
      );
    }
  };
  //#endregion

  return (
    <div className="memory-page">
      <img src={`${axios.defaults.baseURL}/${memory.src}`} alt={memory.title} />
      <div className="memory-title">
        <h2>{memory.title}</h2>
        {memory.favorite && <span>&#11088;</span>}
      </div>
      <p>{memory.description}</p>
      <div className="comment-form">
        <h3>Deixe seu comentário:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Seu comentário"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </label>
          <input type="submit" value="Comentar" className="btn" />
        </form>
      </div>
      <div className="comments-container">
        <h3>Comentários ({comments.length})</h3>
        {comments.length === 0 ? (
          <p>Não há comentários ainda...</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="comment">
              <p className="comment-name">{comment.name}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Memory;
