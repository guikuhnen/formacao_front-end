import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  useEffect(() => {
    console.log("useEffect SEM dependências");
  });

  const [number, setNumber] = useState(1);

  function changeNumber() {
    setNumber(number + 1);
  }

  // 2 - useEffect com array de dependências vazio
  useEffect(() => {
    console.log("useEffect com array de dependências VAZIO");
  }, []);

  // 3 - useEffect com dependências
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("useEffect COM dependências");
    }
    console.log("Executou o useEffect com dependências");
  }, [anotherNumber]);

  // 4 - useEffect limpando um efeito anterior (cleanup)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Executou o timer");
  //     setAnotherNumber(anotherNumber + 1);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [anotherNumber]);

  return (
    <div>
      <h2>Hook useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Alterar número</button>
      <p>Outro Número: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Alterar outro número
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
