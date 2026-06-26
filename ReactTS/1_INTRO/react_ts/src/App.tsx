// 4 - Importando Componentes
import { createContext } from "react";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

// 10 - Context
import Context from "./components/Context";

// 9 - Types
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "Guilherme";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (userName: string): string => {
    return `Seja bem-vindo, ${userName}!`;
  };

  // 9 - Types
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  const testandoFixed: fixed = "Isso";

  // 10 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "React",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <h1>TypeScript with React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      {/* 3 - Componentes */}
      <FirstComponent />
      <SecondComponent name="Segundo Componente" />
      <Destructuring
        title="Título do Post"
        content="Conteúdo do post"
        commentsQty={10}
        tags={["react", "typescript", "javascript"]}
        category={Category.REACT}
      />
      <State />
      {/* 9 - Types */}
      <p>Texto: {myText}</p>
      <p>Segundo Texto: {mySecondText}</p>
      <p>Testando Fixed: {testandoFixed}</p>
      <Context />
    </AppContext.Provider>
  );
}

export default App;
