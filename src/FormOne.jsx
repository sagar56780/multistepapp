import React, { createContext, useState } from 'react';
import Buttons from './Buttons';
import FormTwo from './FormTwo';
export let Mycontext=createContext();
 
const FormOne = () => {
  let [formOneData, updateData] = useState({
    name: '',
    email: '',
    phone: ''

  });
  <Mycontext.Provider value={formOneData}>
      <FormTwo/>
  </Mycontext.Provider>
  
  
  let handleInput = (e) => {
    e.preventDefault();

  
  updateData({
    ...formOneData,
    [e.target.id]:e.target.value
  })


  }
  return (
    <form action='form2' method='get'>
      <div className="form-container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p> <br /><br />
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={formOneData.name} onChange={handleInput} required /><br />
        <label htmlFor="email">Email</label>
        <input type="email" id='email' value={formOneData.email} required onChange={handleInput} /><br />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id='phone' required value={formOneData.phone} onChange={handleInput} /><br />
      </div>
      <Buttons />
    </form>
    


  )
  
}

export default FormOne