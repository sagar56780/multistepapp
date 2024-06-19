import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "../Buttons";
import PlanCard from "../PlanCard";
import { useState } from "react";

const FormTwo = (props) => {
  let nav = useNavigate();
  let [days, updateDays] = useState("mo");
  let [display, changeDisplay] = useState("none");
  let [price1, changePrice1] = useState(9);
  let [price2, changePrice2] = useState(12);
  let [price3, changePrice3] = useState(15);
  let [boolean, updateboolean] = useState(true);

  //fetching data from formOne
  let location = useLocation();
  let formOnedata = location.state;

  let [data, updatedata] = useState([]);
  let handleSlide = () => {
    let div = document.getElementById("slide");
    if (boolean) {
      div.style.justifyContent = "right";
      updateDays("yr");

      changeDisplay("block");

      updateboolean(false);
      changePrice1(price1 * 10);
      changePrice2(price2 * 10);
      changePrice3(price3 * 10);
    } else {
      div.style.justifyContent = "left";
      updateDays("mo");``
      changeDisplay("none");

      changePrice1(9);
      changePrice2(10);
      changePrice3(15);

      updateboolean(true);
    }
  };
  let s = "";
  let cardData = s + data;
  cardData = cardData.split(",");
  let handleClick = (e) => {
    e.preventDefault();

    updatedata(e.target.value);
    console.log(cardData);
  };
  // console.log(email);
  let handleSubmit = (e) => {
    e.preventDefault();

    nav("/form3", { state: cardData });
  };
  return (
    <>
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
        <Buttons />
      </form>
    </>
  );
};

export default FormTwo;
