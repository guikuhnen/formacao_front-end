import "./Admin.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";

function Admin() {
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

  const deletePost = async (id) => {
    try {
      await blogFetch.delete(`/posts/${id}`);

      const filteredPosts = posts.filter((post) => post.id !== id);

      setPosts(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Gerenciar posts</h1>
      {posts && posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
