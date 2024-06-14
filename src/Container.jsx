
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

      </section>
    </div>
  );
};

export default Container;
