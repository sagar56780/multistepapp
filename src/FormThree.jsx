import React from 'react'
import AddOns from './AddOns'
import Buttons from './Buttons'

const FormThree = () => {

  return (
    <form className='form-three'>
      <div className="form-container">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaminig experience.</p> <br /><br />
        <div className="add-main">
          <AddOns title='Online service' subtitle='Access to multiplayer games' month='1' />
          <AddOns title='Larger storage' subtitle='Extra 1TB of cloud save' month='2' />

          <AddOns title='Customizable Profile' subtitle='Custom theme on your profile' month='3' />
        </div>
      </div>
      <Buttons />
    </form>
  )
}

export default FormThree