import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


const Container = () => {

  return (
    <div className="container">
      <section>
        <Sidebar></Sidebar>
        <div className="info-container">
               
           <Outlet></Outlet>
        </div>
              <div className='buttons'> <button > Back</button><button onClick>NEXT STEP</button></div>
      </section>
        
      
    </div>
  );
};

export default Container;
