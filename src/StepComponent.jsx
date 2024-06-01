import React from 'react'
import { NavLink } from 'react-router-dom';


const StepComponent = (props) => {
    let {title,num}=props;
  return (
    <> 
    {/* <NavLink to={'formone'}>Form ONe</NavLink> */}
    <div className='step'> <div className='num'>{num}</div> <p className='p-step'>STEP {num}</p>  <h5>{title}</h5></div>
   
    
    </>
   
  )
}

export default StepComponent