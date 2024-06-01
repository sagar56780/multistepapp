import React from 'react'
import PlanCard from './PlanCard'

const FormTwo = () => {
  return (
    <form>
        <h1>Select your Plan</h1>
        <p>Please provide your name, email address, and phone number.</p> <br /><br />
        
        <PlanCard/>
         <br /><br /><br /><br /><br />
        <div className='buttons'> <button> Back</button><button>NEXT STEP</button></div>


    </form>
   
  )
}

export default FormTwo