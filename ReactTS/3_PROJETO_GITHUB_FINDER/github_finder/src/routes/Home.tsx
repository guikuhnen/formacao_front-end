import { useState } from "react";

//#region Types
import type { UserType } from "../types/UserType.ts";
//#endregion

//#region Components
import Error from "../components/Error.tsx";
import Loader from "../components/Loader.tsx";
import Search from "../components/Search.tsx";
import User from "../components/User.tsx";
//#endregion

type Props = {};

function Home({}: Props) {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        setError(true);
        return;
      }

      const data: UserType = await response.json();

      setUser(data);
    } catch (error: any) {
      console.log(
        `Erro ao buscar usuário: ${error.message ? error.message : error}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User user={user} />}
      {error && <Error />}
    </>
  );
}

export default Home;
