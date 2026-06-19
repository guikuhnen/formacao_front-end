import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import partyFetch from "../axios/config";
import "./Form.css";
import useToast from "../hooks/useToast";

function CreateParty() {
  const [services, setServices] = useState([]);

  //#region New Party States
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [image, setImage] = useState("");
  const [partyServices, setPartyServices] = useState([]);
  //#endregion

  const navigate = useNavigate();

  //#region Load Services
  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await partyFetch.get("/services");
        setServices(response.data);
      } catch (error) {
        useToast(error.response.data.msg, "error");
      }
    };

    loadServices();
  }, []);
  //#endregion

  // Add or remove services from the partyServices state
  const handleServiceChange = (e) => {
    const serviceId = e.target.value;
    const isChecked = e.target.checked;

    const filteredServices = services.filter(
      (service) => service._id === serviceId,
    );

    if (isChecked) {
      setPartyServices((services) => [...services, filteredServices[0]]);
    } else {
      setPartyServices((services) =>
        services.filter((service) => service._id !== serviceId),
      );
    }
  };

  // Create new party
  const createParty = async (e) => {
    e.preventDefault();

    const newParty = {
      title,
      author: authorName,
      description,
      budget,
      image,
      services: partyServices,
    };

    try {
      const response = await partyFetch.post("/parties", newParty);

      if (response.status === 201) {
        navigate("/");
        useToast(response.data.msg);
      }
    } catch (error) {
      useToast(error.response.data.msg, "error");
    }
  };

  return (
    <div className="form-container">
      <h2>Crie sua festa</h2>
      <p>Defina o seu orçamento e escolha os serviços</p>
      <form onSubmit={(e) => createParty(e)}>
        <label>
          <span>Nome da festa</span>
          <input
            type="text"
            id="partyTitle"
            name="partyTitle"
            placeholder="Seja criativo..."
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            onChange={(e) => setAuthorName(e.target.value)}
            value={authorName}
          />
        </label>
        <label>
          <span>Descrição</span>
          <textarea
            id="description"
            name="description"
            placeholder="Conte mais sobre sua festa..."
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
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
            onChange={(e) => setImage(e.target.value)}
            value={image}
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
                    />
                    <p>Marque para solicitar</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <input type="submit" value="Criar Festa" className="btn" />
      </form>
    </div>
  );
}

export default CreateParty;
