import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import partyFetch from "../axios/config";
import useToast from "../hooks/useToast";
import "./Party.css";

function Party() {
  const { id } = useParams();
  const [party, setParty] = useState(null);

  const navigate = useNavigate();

  // Load party details
  useEffect(() => {
    const loadParty = async () => {
      try {
        const response = await partyFetch.get(`/parties/${id}`);
        setParty(response.data);
      } catch (error) {
        useToast(error.response.data.msg, "error");
      }
    };

    loadParty();
  }, []);

  // Delete party
  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja excluir esta festa?")) {
      try {
        const response = await partyFetch.delete(`/parties/${id}`);
        if (response.status === 200) {
          navigate("/");
          useToast(response.data.msg);
        }
      } catch (error) {
        useToast(error.response.data.msg, "error");
      }
    }
  };

  if (!party) return <p>Carregando...</p>;

  return (
    <div className="party-container">
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link to={`/party/edit/${party._id}`} className="btn">
          Editar
        </Link>
        <button className="btn-secondary" onClick={handleDelete}>
          Excluir
        </button>
      </div>
      <p>Orçamento: R$ {party.budget}</p>
      <h3>Serviços contratados:</h3>
      <div className="services-container">
        {party.services.length > 0 ? (
          party.services.map((service) => (
            <div key={service._id} className="service">
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))
        ) : (
          <p>Não há serviços contratados.</p>
        )}
      </div>
    </div>
  );
}

export default Party;
