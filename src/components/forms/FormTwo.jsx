import { useLocation, } from "react-router-dom";
import Buttons from "../Buttons";
import PlanCard from "../PlanCard";

const FormTwo = () => {
  let loaction = useLocation();
  let { email, name, phone } = loaction.state || { email:'', name:'', phone:'' };
  console.log(`email:${email},Name:${name},Phone:${phone}`);

  // console.log(email);
  return (
    <>
      <form className="form2" action="/form3">
        <div className="form-container">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>{" "}
          <br />
          <br />
          <div className="plan-container">
            <PlanCard title="Arcade" month="9" color="#D4AEFD" />
            <PlanCard title="Advance" month="12" />

            <PlanCard title="Pro" month="15" color="#FFFADE" />
          </div>
          <div className="slide-button-container">
            <h4>Monthly </h4>
            <div className="slide-button" id="slide">
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
