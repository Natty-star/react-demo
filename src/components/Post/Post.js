const Post = (props) => {
  return (
    <div className="Content">
      <h3> {props.post.title}</h3>
      <div className="Field">{props.post.content}</div>
    </div>
  );
};

export default Post;
