import { useState } from "react";

const Data = () => {
  let someData = 10;

  // [nome da variável, função para atualizar a variável] = state + valor inicial da variável
  const [anotherData, setAnotherData] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        {/* <button onClick={() => (someData = 15)}>Mudar variável</button> - Não funciona */}
      </div>
      <div>
        <p>Valor 2: {anotherData}</p>
        <button onClick={() => setAnotherData(20)}>Mudar variável</button>
      </div>
      <div>
        <button
          onClick={() => {
            setAnotherData(anotherData + 5);
          }}
        >
          Mudar variável somando 5
        </button>
      </div>
    </div>
  );
};

export default Data;
