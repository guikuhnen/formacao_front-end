import { useEffect, useState } from "react";
import partyFetch from "../axios/config";
import "./Home.css";

import { Link } from "react-router-dom";
import useToast from "../hooks/useToast";

function Home() {
  const [parties, setParties] = useState(null);

  //#region Busca as festas
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const response = await partyFetch.get("/parties");
        setParties(response.data);
      } catch (error) {
        useToast(error.response.data.msg, "error");
      }
    };

    fetchParties();
  }, []);

  if (!parties) return <p>Carregando...</p>;
  //#endregion

  return (
    <div className="home">
      <h1>Suas Festas</h1>
      <div className="parties-container">
        {parties.length === 0 ? (
          <p>Você ainda não tem festas criadas. Crie uma nova festa!</p>
        ) : (
          parties.map((party) => (
            <div className="party" key={party._id}>
              <img src={party.image} alt={party.title} />
              <h3>{party.title}</h3>
              <Link to={`/party/${party._id}`} className="btn-secondary">
                Detalhes
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
