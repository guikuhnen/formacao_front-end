import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import type { RepoType } from "../types/RepoType";
import css from "./Repository.module.css";

type RepositoryProps = {
  repository: RepoType;
};

function Repository({ repository }: RepositoryProps) {
  return (
    <div className={css.repository_container}>
      <h3>{repository.name}</h3>
      <p className={css.repository_language}>
        <BsCodeSlash />
        <span>{repository.language}</span>
      </p>
      <div className={css.repository_stats}>
        <div>
          <AiOutlineStar />
          <span>{repository.stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{repository.forks_count}</span>
        </div>
      </div>
      <a
        className={css.repository_btn}
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          Ver no GitHub <RiGitRepositoryLine />
        </span>
      </a>
    </div>
  );
}

export default Repository;
