import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 9 - Search params
    navigate("/search?name=" + query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
