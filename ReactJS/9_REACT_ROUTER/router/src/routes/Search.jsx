import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// 9 - Search params
const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  console.log(url);
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Resultados da pesquisa: </h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 7 - Rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
