import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const [count, setCount] = useState(0);

  function getItemsFromDatabase() {
    // Simulando uma função que busca itens de um banco de dados
    return ["Item 1", "Item 2", "Item 3"];
  }

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={useCallback(getItemsFromDatabase, [])} />
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <p>Contador: {count}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
