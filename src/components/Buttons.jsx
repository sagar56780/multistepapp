import React from "react";
import { useNavigate } from "react-router-dom";

let index = 0;
const Buttons = () => {


  let nav = useNavigate();
  let forms = ["/", "/form2", "/form3", "/form4"];
  let handleBack = (e) => {
    e.preventDefault();
    if (index > 0) {
      index--;
    }
    nav(forms[index]);
  };

  return (
    <div className="buttons">
      <button onClick={handleBack}> Back</button>
      <button type="submit">NEXT STEP</button>
    </div>
  );
};

export default Buttons;
