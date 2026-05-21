import "./ImcCalc.css";

import { useState } from "react";

//#region Components
import Button from "../Buttons/Button";
//#endregion

const ImcCalc = ({ calcImc }) => {
  //#region useStates
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleHeightChange = (e) => {
    const validValue = validDigits(e.target.value);

    setHeight(validValue);
  };
  const handleWeightChange = (e) => {
    const validValue = validDigits(e.target.value);

    setWeight(validValue);
  };
  //#endregion

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  return (
    <div id="calc-container">
      <h2>Calculadora IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="btn-calc"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="btn-clear" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
