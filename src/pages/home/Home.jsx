import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import "react-circular-progressbar/dist/styles.css";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">
            <h2 className="title-H">AVAILABLE PRODUCTS</h2>
          </div>
          <div style={{ marginLeft: "200px" }}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
