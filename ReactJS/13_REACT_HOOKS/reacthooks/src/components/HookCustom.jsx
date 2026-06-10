import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousNumber = usePrevious(number);

  return (
    <div>
      <h2>Hook Customizado</h2>
      <p>Número atual: {number}</p>
      <p>Número anterior: {previousNumber}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100))}>
        Incrementar
      </button>
      <hr />
    </div>
  );
};

export default HookCustom;
