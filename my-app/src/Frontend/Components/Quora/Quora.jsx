import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widgets from "../Widgets/Widgets";
import "./Quora.css";

const Quora = () => {
  return (
    <div className="quora">
      <div className="quora__contents">
        <div className="quora__content">
          <div className="fixed">
            <Sidebar />
          </div>
          <Feed />
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Quora;
