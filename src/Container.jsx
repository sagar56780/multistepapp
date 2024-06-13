import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Container = () => {
  let nav = useNavigate();



  return (
    <div className="container">
      <section>
        <Sidebar count={nav}></Sidebar>
        <div className="info-container">
          <Outlet></Outlet>
        </div>
        <div className="buttons">

          <button onClick={()=>nav(-1)}> Back</button>
          <button onClick={()=>nav(+1)}>NEXT STEP</button>
        </div>
      </section>
    </div>
  );
};

export default Container;
