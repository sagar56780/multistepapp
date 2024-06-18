import React from "react";
import Buttons from "../Buttons";

const FormFour = (props) => {
  let { plan, planprice, addons, addonsprice, service, tatal, days } = props;
  return (
    <form>
      <div className="form-container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p> <br />
        <br />
        <div className="total">
          <h1>{plan}</h1>
          <ul>
            {/* {addons.map((val, ind) => {
              <li key={ind}>
                {
                  val
                }
              </li>;
            })} */}
          </ul>
        </div>
      </div>
      <Buttons></Buttons>
    </form>
  );
};

export default FormFour;
