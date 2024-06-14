import React from 'react'
import Buttons from './Buttons'

const FormOne = () => {
  return (
    <form action='form2' method='get'>
      <div className="form-container">
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number.</p> <br /><br />
    <label htmlFor="name">Name</label>
    <input type="text" id='name' /><br />
    <label htmlFor="email">Email</label>
    <input type="email" id='email' /><br />
    <label htmlFor="phone">Phone Number</label>
    <input type="tel" id='phone' /><br />
</div>
<Buttons/>
</form>

    
  )
}

export default FormOne