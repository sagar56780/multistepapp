import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "../Buttons";
import PlanCard from "../PlanCard";
import { useState } from "react";

const FormTwo = (props) => {
  let nav = useNavigate();
  let [days, setDays] = useState("mo");
  let [display, setDisplay] = useState("none");
  let [price1, setPrice1] = useState(9);
  let [price2, setPrice2] = useState(12);
  let [price3, setPrice3] = useState(15);
  let [boolean, setBoolean] = useState(true);

  //fetching data from formOne
  // let location = useLocation();
  // let formOnedata = location.state;

  let [data, updatedata] = useState([]);
  let handleSlide = () => {
    let div = document.getElementById("slide");
    if (boolean) {
      div.style.justifyContent = "right";
      setDays("yr");

      setDisplay("block");

      setBoolean(false);
      setPrice1(price1 * 10);
      setPrice2(price2 * 10);
      setPrice3(price3 * 10);
    } else {
      div.style.justifyContent = "left";
      setDays("mo");
      setDisplay("none");

      setPrice1(9);
      setPrice2(10);
      setPrice3(15);

      setBoolean(true);
    }
  };
  let s = "";
  let cardData = s + data;
  cardData = cardData.split(",");
  let card=document.getElementsByClassName("card");
  let handleClick = (e) => {
    let specCard=document.getElementById(e.target.id);
    for(const element of card)
      {
      element.style.background ="#344c64"
      element.style.border = "#0056b3"

      }
    specCard.style.background ="#3F634B"
    specCard.style.border ="3px solid #0056b3"
  


    updatedata(e.target.value); 
  };

  let handleSubmit = (e) => {
   
    e.preventDefault();
    console.log(cardData);
    if (cardData == '') {
      window.alert("please select any of the card");
    } else {
      nav("/form3", { state: cardData });
    }
  };
  return (
  
      <form className="form2" action="/form3" onSubmit={handleSubmit}>
        <div className="form-container">
          <h1 style={{ cursor: "none" }}>Select your plan</h1>
          <p>You have option of monthly or yearly billing</p> <br />
          <br />
          <div className="plan-container" typeof="radio">
            <PlanCard
              title="Arcade"
              price={price1}
              days={days}
              color="#D4AEFD"
              display={display}
              handleClick={handleClick}
              id="card1"
            />
            <PlanCard
              title="Advance"
              price={price2}
              days={days}
              display={display}
              handleClick={handleClick}
              id="card2"
            />
            <PlanCard
              title="Pro"
              price={price3}
              days={days}
              color="#57A6A1"
              display={display}
              handleClick={handleClick}
              id="card3"
            />
          </div>
          <div className="slide-button-container">
            <h4>Monthly </h4>
            <div className="slide-button" id="slide" onClick={handleSlide}>
              <div className="slide-dot"></div>
            </div>
            <h4>Yearly</h4>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <Buttons handleSubmit={handleSubmit} previousForm="/" confirm="Next" />
      </form>
    
  );
};

export default FormTwo;
