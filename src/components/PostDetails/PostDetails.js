import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const PostDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [postDetail, setPostDetail] = useState({});
  console.log(params.id);

  const deleteButtonClicked = (id) => {
    console.log(id);
  };
  return (
    <div>
      {params.id && (
        <div className="ProductDetail">
          <div>Product Details</div>
          <h1> {postDetail.name}</h1>
          <div>
            {postDetail.price}
            <br />

            <div style={{ textAlign: "left" }}></div>
          </div>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              deleteButtonClicked(params.id);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PostDetails;
