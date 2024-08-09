import React, { useState } from "react";
import AddOns from "../AddOns";
import Buttons from "../Buttons";
import { useLocation, useNavigate } from "react-router-dom";

const FormThree = () => {
  let nav = useNavigate();
  //data fetching from formTwo
  let location = useLocation();
  let cardData = location.state;
  // using useState for collecting data from formThree
  const [isChecked, setIsChecked] = useState(false);
  const [addOnValue, setAddOnValue] = useState([cardData]);
  let s = "";
  const handleChange = (e) => {
    setIsChecked(e.target.checked);

    s = "" + e.target.value;
    s = s.split(",");
    // Manage checked values in an array
    if (e.target.checked) {
      setAddOnValue([...addOnValue, s]);
    } else {
      addOnValue.pop(s);
    }
  };
  console.log(addOnValue);

  let handleSubmit = (e) => {
    console.log(s);
  
      e.preventDefault();
      nav("/form4", { state: addOnValue });

  };
  return (
    <form className="form-three" onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Pick add-ons</h1>  

       <div className="add-on-container">
        <AddOns 
            title="Online service"
            subtitle="Access to multiplayer games"
            month="1"
            handleChange={handleChange}
          />
          <AddOns
            title="Larger storage"
            subtitle="Extra 1TB of cloud save"
            month="2"
            handleChange={handleChange}
          />

          <AddOns
            title="Customizable Profile"
            subtitle="Custom theme on your profile"
            month="3"
            handleChange={handleChange}
          />
        </div>
        </div>
    
      <Buttons
        handleSubmit={handleSubmit}
        previousForm="/form2"
        confirm="Next"
      />
    </form>
  );
};

export default FormThree;
