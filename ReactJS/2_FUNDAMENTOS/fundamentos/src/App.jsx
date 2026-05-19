import { useState } from "react";
import "./App.css";

//#region Components
// 2 - Importação de Componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
//#endregion

function App() {
  // 3 - Comentários
  return (
    <div className="App">
      {/* Comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      {/* 4 - Template Expression */}
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
