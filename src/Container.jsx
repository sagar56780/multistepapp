import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Container = () => {
  let [count, updateCount] = useState(0);
  let nextPage = () => {
    if (count < 4) {
      updateCount(count + 1);
    }
  };
  let backPage = () => {
    if (count > 0) {
      updateCount(count + -1);
    }
  };
  return (
    <div className="container">
      <section>
        <Sidebar count={count}></Sidebar>
        <div className="info-container">
          <Outlet></Outlet>
        </div>
        <div className="buttons">

          <button onClick={nextPage}> Back</button>
          <button onClick={backPage}>NEXT STEP</button>
        </div>
      </section>
    </div>
  );
};

export default Container;
