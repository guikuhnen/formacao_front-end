import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios-config";
import useToast from "../hooks/useToast";
import "./Home.css";

function Home() {
  const [memories, setMemories] = useState(null);

  //#region Busca as memórias
  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const response = await axios.get("/memories");
        setMemories(response.data);
      } catch (error) {
        console.error("Erro ao buscar memórias:", error);
        useToast(
          `Erro ao buscar memórias: ${error.response?.data?.error || error.message}`,
          "error",
        );
      }
    };

    fetchMemories();
  }, []);

  if (!memories) return <p>Carregando...</p>;
  //#endregion

  return (
    <div className="home-page">
      <h2>Confira as memórias mais recentes</h2>
      <div className="memories-container">
        {memories.length > 0 ? (
          memories.map((memory) => (
            <div key={memory._id} className="memory-card">
              <img
                src={`${axios.defaults.baseURL}/${memory.src}`}
                alt={memory.title}
              />
              <p>{memory.title}</p>
              <Link to={`/memories/${memory._id}`} className="btn">
                Comentar
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhuma memória encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
