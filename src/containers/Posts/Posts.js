import { useState } from "react";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import PostDetails from "../../components/PostDetails/PostDetails";

const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "news", content: "my new post", author: "Natty" },
    { id: 2, title: "Sport", content: "sport news", author: "Mera" },
    { id: 3, title: "story", content: "music", author: "Star" },
  ]);

  const post = posts.map((p) => {
    return (
      <Link to={`${p.id}`} key={p.id}>
        <Post key={p.id} post={p} />
      </Link>
    );
  });

  return (
    <div className="Product">
      {post}

      <div>
        <PostDetails />
      </div>
    </div>
  );
};

export default Posts;
