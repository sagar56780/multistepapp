import React from "react";
import { useNavigate } from "react-router-dom";

export var index = 0;
const Buttons = (props) => {
  let {previousForm,confirm } = props;
  let nav = useNavigate();
  let forms = ["/", "/form2", "/form3", "/form4"];
  let handleBack = (e) => {
    // e.preventDefault();
    // if (index > 0) {
    //   index--;
    // }
    nav(previousForm);
  };


  return (
    <div className="buttons">
      <button onClick={handleBack}> Back</button>
      <button type="submit"  >{confirm}</button>
    </div>
  );
};
export default Buttons;
