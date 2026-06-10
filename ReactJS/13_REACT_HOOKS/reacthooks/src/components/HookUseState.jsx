import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Guilherme");

  function changeName(newName) {
    userName = newName;
    setName(newName + 1);
  }

  // 2 - useState e input controlado
  const [age, setAge] = useState(18);

  return (
    <div>
      {/* 1 - useState */}
      <h2>Hook useState</h2>
      <p>Nome: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Variável: {userName}</p>
      <button onClick={() => changeName("Maria")}>Alterar Nome</button>

      {/* 2 - useState e input controlado */}
      <h2>Input Controlado</h2>
      <p>Idade: {age}</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <hr />
    </div>
  );
};

export default HookUseState;
