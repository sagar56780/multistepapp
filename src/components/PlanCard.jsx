import React from 'react'

const PlanCard = (props) => {
  let {title,month,color}=props;
  return (
    <div className='card'>
        <i style={{background:color}} className="fa-solid fa-gamepad"></i>
        <br /><br />
        <h5>{title}</h5>
        <p>${month}/mo</p>

    </div>
  )
}

export default PlanCard