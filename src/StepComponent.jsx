import React from 'react'
import { NavLink } from 'react-router-dom';

const StepComponent = (props) => {
    let {title,num}=props;
  return (
    <> 
    <NavLink to={'formone'}></NavLink>
    <div className='step'> <div className='num'>{num}</div> <p className='p-step'>STEP {num} <h5>{title}</h5></p> </div>
    
    </>
   
  )
}

export default StepComponent