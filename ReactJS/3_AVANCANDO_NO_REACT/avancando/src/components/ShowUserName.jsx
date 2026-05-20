import { useState } from "react";
import "./ShowUserName.css";

// 8 - Componentes com props
const ShowUserName = (props) => {
  return (
    <div className="container2">
      <p>O nome do usuário é: {props.name}</p>
    </div>
  );
};

export default ShowUserName;
