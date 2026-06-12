import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  //#region getPosts
  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  //#endregion

  return (
    <div className="home-container">
      <h1>Últimos posts</h1>
      {posts && posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
