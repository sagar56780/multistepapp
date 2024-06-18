import React from "react";

const PlanCard = (props) => {
  let { title, price, days, color, display, handleClick, id } = props;

  return (
    <label
      className="card"
    
      id={id}
      name="plan"
      title={title}
      data-price={price}
      days={days}
    
     

    >
      <input
          onClick={handleClick}
        style={{ display: "none", position: "absolute" }}
        type="radio"
        value={[title, price, days]}
        name="radiogroup"
      />
      <i style={{ background: color,pointerEvents:'none' }} className="fa-solid fa-gamepad"></i>
      <br />
      <br />
      <h5 style={{ pointerEvents: "none" }} id={id}>
        {title}
      </h5>

      <p style={{ pointerEvents: "none" }}>
        ${price}/{days}
      </p>

      <h5 id="month" style={{pointerEvents:'none', display: display, color: "black" }}>
        2 months Extra
      </h5>
    </label>
  );
};

export default PlanCard;
