import Header from "../Headers/Header";
import PageRouter from "./PageRouter";
import "../Headers/Header.css";

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="Product">
        <PageRouter />
      </div>
    </>
  );
};

export default Dashboard;
