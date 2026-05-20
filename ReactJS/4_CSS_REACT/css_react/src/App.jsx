import "./App.css";

import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  // 4 - CSS Inline dinâmico
  const x = 10;

  // 5 - Classe dinâmica
  const redTitle = true;

  return (
    <div className="App">
      {/* 1 - CSS Global - index.css */}
      <h1>CSS no React</h1>
      {/* 2 - CSS Local - App.css - NÃO É SCOPED (pode vazar para outros elementos) */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - Inline Styles - Dentro de {{}} duplas */}
      <p
        style={{
          color: "green",
          "border-bottom": "1px solid #000",
          fontStyle: "italic",
          padding: "25px",
        }}
      >
        Este parágrafo tem estilo inline
      </p>
      {/* 4 - CSS Inline dinâmico */}
      <p style={x > 5 ? { color: "purple" } : { color: "yellow" }}>
        Este parágrafo tem estilo inline dinâmico
      </p>
      <p style={x > 25 ? { color: "purple" } : { color: "yellow" }}>
        Este parágrafo tem estilo inline dinâmico 2
      </p>
      {/* 5 - Classe dinâmica */}
      <h2 className={redTitle && "red-title"}>
        Este é um título com classe dinâmica
      </h2>
      <h2 className={!redTitle ? "red-title" : "title"}>
        Este é um título com classe dinâmica 2
      </h2>
      {/* 6 - CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
