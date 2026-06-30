import { useState, type KeyboardEvent, type MouseEvent } from "react";
import { BsSearch } from "react-icons/bs";
import css from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = async (e: KeyboardEvent | MouseEvent) => {
    if (
      (e as KeyboardEvent).key === "Enter" ||
      (e as MouseEvent).type === "click"
    ) {
      await loadUser(userName);
    }
  };

  return (
    <div className={css.search_container}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios!</p>
      <div className={css.search_box}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
        />
        <button
          title="Pesquisar"
          onClick={(e: MouseEvent<HTMLButtonElement>) => handleKeyDown(e)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
