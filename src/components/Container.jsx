
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Container = () => {
  let nav = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update showSidebar based on windowWidth
    setShowSidebar(windowWidth >= 500);
  }, [windowWidth]);

 



  return ( 
    <div className="container">
      {!showSidebar&&<Sidebar count={nav}></Sidebar>}
      <section>
       {showSidebar&&<Sidebar count={nav}></Sidebar>
      
        }
        <div className="info-container">
          <Outlet></Outlet>
        </div>

      </section>
    </div>
  );
};

export default Container;
