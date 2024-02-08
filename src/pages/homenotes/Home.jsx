import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import "react-circular-progressbar/dist/styles.css";
import DatatableItemnote from "../../components/tableitemnote/Table";

const Homenote = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">
            <h2 className="title-H">PRODUCTS NOTE</h2>
          </div>
          <DatatableItemnote />
        </div>
      </div>
    </div>
  );
};

export default Homenote;
