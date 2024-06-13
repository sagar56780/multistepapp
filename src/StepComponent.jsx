import React from 'react'



const StepComponent = (props) => {
    let {title,num}=props;
  return (
    <> 
    {/* <NavLink to={'/'}>Form ONe</NavLink> */}
    <div className='step'> <div className='num'>{num}</div> <p className='p-step'>STEP {num}</p>  <h5>{title}</h5></div>
   
    
    </>
   
  )
}

export default StepComponent