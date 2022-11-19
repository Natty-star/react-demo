import { Route, Routes, Navigate } from "react-router";
import AddPosts from "../../components/AddPosts/AddPosts";
import Follow from "../../components/Follow/Follow";
import Posts from "../Posts/Posts";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/posts" />} />
      <Route path="posts" element={<Posts />}>
        <Route path=":id" element={<Posts />} />
      </Route>
      <Route path="create-post" element={<AddPosts />} />
      <Route path="follow" element={<Follow />}></Route>
    </Routes>
  );
};

export default PageRouter;
