import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import StepComponent from "./StepComponent";

const Sidebar = (props) => {
  let {count}=props;

  let nav = useNavigate();


  nav(count)
  return (
    <article>
      {/* <StepComponent title="YOUR INFO" num='1'></StepComponent>
    <StepComponent title="SELECT PLAN" num='2'></StepComponent>

    <StepComponent title="ADD-ONS" num='3'></StepComponent>

    <StepComponent title="SUMMARY" num='4'></StepComponent> */}

      <NavLink className={"nav-link"} to='/'>
        <StepComponent title="YOUR INFO" num="1"></StepComponent>
      </NavLink>
      <NavLink className={"nav-link"} to='/form2' onClick={() => nav("/form2")}>
        <StepComponent title="SELECT PLAN" num="2"></StepComponent>
      </NavLink>
      <NavLink className={"nav-link"} to='/form3' onClick={() => nav("/form3")}>
        <StepComponent title="ADD-ONS" num="3"></StepComponent>
      </NavLink>
      <NavLink className={"nav-link"} to='/form4' onClick={() => nav("/form4")}>
        <StepComponent title="SUMMARY" num="4"></StepComponent>
      </NavLink>
    </article>
  );
};

export default Sidebar;
