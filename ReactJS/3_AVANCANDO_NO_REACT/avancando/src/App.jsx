//#region CSS
import "./App.css";
//#endregion

//#region Assets
import cityImg from "./assets/city.jpg";
//#endregion

//#region Hooks
import Data from "./components/Data";
import ListRender from "./components/ListRender";
//#endregion

import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - State lift
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// 11 - Renderização de listas com componentes
const cars = [
  { id: 1, brand: "Fiat", km: 10000, color: "Verde" },
  { id: 2, brand: "BMW", km: 70000, color: "Vermelho" },
  { id: 3, brand: "Audi", km: 90000, color: "Azul" },
];

function App() {
  const userName = "João";

  // 14 - Função em prop
  const showMessage = () => {
    console.log("Evento do componente pai");
  };

  // 15 - State lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando no React</h1>
      {/* 1 - Imagem em public */}
      <h2>Imagem em public</h2>
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em src */}
      <h2>Imagem em src</h2>
      <img src={cityImg} alt="Imagem da cidade" />
      {/* 3 - Hooks - useState */}
      <h2>Hooks</h2>
      <Data />
      {/* 4 - Renderização de listas */}
      <h2>Renderização de listas</h2>
      <ListRender />
      {/* 7 - Conditional Rendering */}
      <h2>Conditional Rendering</h2>
      <ConditionalRender />
      {/* 8 - Componentes com props */}
      <h2>Componentes com props</h2>
      <ShowUserName name={userName} />
      {/* 9 - Desestruturação de props */}
      <h2>Desestruturação de props</h2>
      <CarDetails brand="Toyota" km={50000} color="Prata" />
      {/* 10 - Reutilização de componentes */}
      <h2>Reutilização de componentes</h2>
      <CarDetails color="Preto" brand="Honda" km={30000} />
      <CarDetails km={20000} color="Branco" brand="Ford" />

      {/* 11 - Renderização de listas com componentes */}
      <h2>Renderização de listas com componentes</h2>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
      {/* 12 - Fragments */}
      <h2>Fragments</h2>
      <Fragment />
      {/* 13 - Children */}
      <h2>Children</h2>
      <Container myValue="testing">
        <p>Conteúdo do container</p>
      </Container>
      {/* 14 - Função em prop */}
      <h2>Função em prop</h2>
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - State lift */}
      <h2>State lift</h2>
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
