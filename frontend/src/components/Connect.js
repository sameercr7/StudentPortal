import React from "react";
import "./css/Kconnect.css";
import Feed from "./Feed";
import KconnectHeader from "./KconnectHeader";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function Connect() {
  return (
    <div>
        <KconnectHeader />
        <div className="kconnect__contents">
        <div className="kconnect__content">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>
      </div>
  )
}

export default Connect