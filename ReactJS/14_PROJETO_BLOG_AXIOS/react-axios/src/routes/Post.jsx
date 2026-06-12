import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogFetch from "../axios/config";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  //#region getPost
  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  //#endregion

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/`} className="btn">
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
}

export default Post;
