import React from "react";
import Buttons from "../Buttons";
import { useLocation } from "react-router-dom";

const FormFour = () => {
  let sum = 0;
  // fetching data from formTheee
  let location = useLocation();
  let formFoureData = location.state;

  console.log(formFoureData);

  return (
    <form className="form4">
      <div className="form-container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p> <br />
        <br />
        <div className="total">
          <div className="plan-card-data">
            <h1>
              {formFoureData[0][0]} (
              {formFoureData[0][2] === "mo" ? "Monthly" : "Yearly"})
            </h1>
            <h4>
              ${formFoureData[0][1]}/{formFoureData[0][2]}
            </h4>
          </div>
          <br />
          <hr style={{ width: "85%" }} />
          <br />
          <br />
          <ul>
            {formFoureData.map((val, ind) => {
              return (
                <>
                  <li key={ind}>
                    {ind > 0 ? (
                      <div className="add-ons-value">
                        <h6>{val[0]}</h6>
                        <h6>${val[1]}/mo</h6>{" "}
                      </div>
                    ) : null}
                  </li>
                </>
              );
            })}
          </ul>
          <br />
          <br />
          <br />
          <div className="total-amount">
            {" "}
            <h1>
              Total Amount (per{" "}
              {formFoureData[0][2] === "mo" ? "month" : "year"}):{}
            </h1>
            <h1>
              {formFoureData.map((val, ind) => {
                if (ind > 0) {
                  sum += +val[1];
                } else {
                }
              })}
              ${(sum += +formFoureData[0][1])}
            </h1>
          </div>
        </div>
      </div>
      <Buttons previousForm="/form3" confirm="Confirm"></Buttons>
    </form>
  );
};

export default FormFour;
