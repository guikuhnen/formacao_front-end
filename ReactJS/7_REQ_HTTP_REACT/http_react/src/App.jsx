import "./App.css";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // 1 - Resgatando dados
  const [produtcs, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);
  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   getData();
  // }, []);

  // 2 - Enviando dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // 5- Refatorando o post
    httpConfig(product, "POST");

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinâmico
    // // Resposta do servidor
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("");
    setPrice("");
  };

  return (
    <>
      <h1>HTTP em React</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando...</p>}
      {/* 7 - Tratando erros */}
      {error && <p>{error}</p>}
      {/* 1 - Resgatando dados */}
      <ul>
        {/* 4 - custom hook */}
        {/* {produtcs.map((product) => ( */}
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
      </ul>
      {/* 2 - Enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome do produto:</span>
            <input
              type="text"
              placeholder="Nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço do produto:</span>
            <input
              type="number"
              placeholder="Preço do produto"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* <button type="submit">Adicionar Produto</button> */}
          {/* 7 - Loading post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </>
  );
}

export default App;
