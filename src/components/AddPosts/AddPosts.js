import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPosts.css";
const AddPosts = () => {
  const newPost = useRef();
  const navigate = useNavigate();

  const postHandler = (e) => {
    e.preventDefault();
    const form = newPost.current;
    const data = {
      title: form["title"].value,
      content: form["content"].value,
    };
    console.log(data);
    navigate("/");
  };

  return (
    <div className="NewProduct">
      <form ref={newPost} onSubmit={postHandler}>
        <h1>Add a Post</h1>

        <label>Title</label>
        <input type="text" label={"title"} name={"title"} />

        <label>Content</label>
        <input type="text" label={"content"} name={"content"} />
        <button>Add Post </button>
      </form>
    </div>
  );
};

export default AddPosts;
