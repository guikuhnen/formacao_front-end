import { useState } from "react";

const ListRender = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const deleteLast = () => {
    const lastNumber = items.length - 1;

    // 6 - Previous state
    setItems((prevItens) =>
      prevItens.filter((item, index) => index !== lastNumber),
    );
  };

  return (
    <div>
      <p>Lista de Itens</p>
      <ul>
        {/* 5 - Renderização de listas com KEY */}
        {/* {items.map((item, i) => (  se não tiver ID use o index "i"*/}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {/* {items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })} funciona também mas deve ter return*/}
      </ul>
      <div>
        <button
          onClick={() =>
            setItems([
              ...items,
              { id: items.length + 1, name: "Item " + (items.length + 1) },
            ])
          }
        >
          Adicionar Item
        </button>
      </div>
      <div>
        {/* 6 - Previous state */}
        <button onClick={deleteLast}>Delete last item</button>
      </div>
    </div>
  );
};

export default ListRender;
