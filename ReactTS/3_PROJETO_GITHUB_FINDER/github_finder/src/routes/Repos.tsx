import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Repos.module.css";

//#region Components
import BackBtn from "../components/BackBtn";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Repository from "../components/Repository";
//#endregion

import type { RepoType } from "../types/RepoType";

type Props = {};

function Repos({}: Props) {
  const { username } = useParams();
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState<RepoType[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  try {
    if (!username) {
      setError(true);
      return;
    }

    useEffect(() => {
      const loadRepos = async (username: string) => {
        setIsLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
        );

        if (!response.ok) {
          setError(true);
          return;
        }

        const data: RepoType[] = await response.json();

        let orderedRepos = data.sort((a: RepoType, b: RepoType) => {
          return b.stargazers_count - a.stargazers_count;
        });
        // orderedRepos = orderedRepos.slice(0, 5);

        setRepos(orderedRepos);

        setIsLoading(false);
      };

      loadRepos(username);
    }, []);
  } catch (error: any) {
    console.log(
      `Erro ao buscar usuário: ${error.message ? error.message : error}`,
    );
  }

  return (
    <div className={css.repos_container}>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {isLoading && <Loader />}
      {!repos || repos.length === 0 ? (
        <p>Este usuário não possui repositórios.</p>
      ) : (
        <div className={css.repos_list}>
          {repos.map((repo: RepoType) => (
            <Repository key={repo.name} repository={repo} />
          ))}
        </div>
      )}
      {error && <Error />}
    </div>
  );
}

export default Repos;
