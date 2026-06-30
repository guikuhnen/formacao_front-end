import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import type { UserType } from "../types/UserType";
import css from "./User.module.css";

type UserProps = { user: UserType };

function User({ user }: UserProps) {
  return (
    <div className={css.user_container}>
      <img src={user.avatar_url || ""} alt={user.login} />
      <h2>{user.login}</h2>
      {user.location && (
        <p className={css.location}>
          <MdLocationPin />
          <span>{user.location}</span>
        </p>
      )}
      <div className={css.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={css.number}>{user.followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={css.number}>{user.following}</p>
        </div>
      </div>
      <Link to={`/repos/${user.login}`}>Ver melhores projetos</Link>
    </div>
  );
}

export default User;
