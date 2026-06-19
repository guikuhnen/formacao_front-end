import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import partyFetch from "../axios/config";
import "./Form.css";
import useToast from "../hooks/useToast";

function EditParty() {
  const { id } = useParams();
  const [partyOriginalTitle, setPartyOriginalTitle] = useState("");
  const [party, setParty] = useState(null);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  //#region Load Services
  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await partyFetch.get("/services");
        setServices(response.data);
        loadParty();
      } catch (error) {
        useToast(error.response.data.msg, "error");
      }
    };

    //#region Load party details
    const loadParty = async () => {
      try {
        const response = await partyFetch.get(`/parties/${id}`);
        setParty(response.data);
        setPartyOriginalTitle(response.data.title);
      } catch (error) {
        useToast(error.response.data.msg, "error");
      }
    };
    //#endregion

    loadServices();
  }, []);
  //#endregion

  //#region Add or remove services from the partyServices state
  const handleServiceChange = (e) => {
    const serviceId = e.target.value;
    const isChecked = e.target.checked;

    const filteredServices = services.filter(
      (service) => service._id === serviceId,
    );

    let partyServices = party.services;

    if (isChecked) {
      partyServices = [...partyServices, filteredServices[0]];
    } else {
      partyServices = partyServices.filter(
        (service) => service._id !== serviceId,
      );
    }
    setParty({ ...party, services: partyServices });
  };
  //#endregion

  const updateParty = async (e) => {
    e.preventDefault();

    try {
      const response = await partyFetch.put(`/parties/${party._id}`, party);

      if (response.status === 200) {
        navigate("/");
        useToast(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      useToast(error.response.data.msg, "error");
    }
  };

  if (!party) return <p>Carregando...</p>;

  return (
    <div className="form-container">
      <h2>Editando: {partyOriginalTitle}</h2>
      <p>Ajuste as informações da sua festa</p>
      <form onSubmit={(e) => updateParty(e)}>
        <label>
          <span>Nome da festa</span>
          <input
            type="text"
            id="partyTitle"
            name="partyTitle"
            placeholder="Seja criativo..."
            required
            onChange={(e) => setParty({ ...party, title: e.target.value })}
            value={party.title}
          />
        </label>
        <label>
          <span>Anfitrião</span>
          <input
            type="text"
            id="authorName"
            name="authorName"
            placeholder="Quem está organizando?"
            required
            onChange={(e) => setParty({ ...party, author: e.target.value })}
            value={party.author}
          />
        </label>
        <label>
          <span>Descrição</span>
          <textarea
            id="description"
            name="description"
            placeholder="Conte mais sobre sua festa..."
            required
            onChange={(e) =>
              setParty({ ...party, description: e.target.value })
            }
            value={party.description}
          ></textarea>
        </label>
        <label>
          <span>Orçamento</span>
          <input
            type="number"
            id="budget"
            name="budget"
            placeholder="Quanto você pretende investir?"
            required
            onChange={(e) => setParty({ ...party, budget: e.target.value })}
            value={party.budget}
          />
        </label>
        <label>
          <span>Imagem</span>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Insira o URL da imagem"
            required
            onChange={(e) => setParty({ ...party, image: e.target.value })}
            value={party.image}
          />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 &&
              services.map((service) => (
                <div key={service._id} className="service">
                  <img src={service.image} alt={service.name} />
                  <p className="service-name">{service.name}</p>
                  <p className="service-price">R$ {service.price}</p>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      value={service._id}
                      onChange={(e) => handleServiceChange(e)}
                      checked={
                        party.services.find(
                          (partyService) => partyService._id === service._id,
                        ) || ""
                      }
                    />
                    <p>Marque para solicitar</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <input type="submit" value="Atualizar Festa" className="btn" />
      </form>
    </div>
  );
}

export default EditParty;
