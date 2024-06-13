import React from 'react'

const FormOne = () => {
  return (
    <form>
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number.</p> <br /><br />
    <label htmlFor="name">Name</label><br />
    <input type="text" id='name' /><br /><br />
    <label htmlFor="email">Email</label><br />
    <input type="email" id='email' /><br /><br />
    <label htmlFor="phone">Phone Number</label><br />
    <input type="tel" id='phone' /><br /><br />


</form>

    
  )
}

export default FormOne