import { useState } from "react";
import "./CarDetails.css";

// 9 - Desestruturação de props
const CarDetails = ({ brand, km, color }) => {
  return (
    <div className="container1">
      <p>Detalhes do carro:</p>
      <p>Marca: {brand}</p>
      <p>Kilometragem: {km}</p>
      <p>Cor: {color}</p>
    </div>
  );
};

export default CarDetails;
