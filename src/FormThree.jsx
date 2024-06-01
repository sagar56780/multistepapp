import React from 'react'
import AddOns from './AddOns'

const FormThree = (props) => {
  let {next,back}=props;
  return (
    <form className='form-three'>
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaminig experience.</p> <br /><br />
    <AddOns title='Online service' subtitle='Access to multiplayer games' month='1'/>
    <AddOns title='Larger storage' subtitle='Extra 1TB of cloud save' month='2'/>

    <AddOns title='Customizable Profile' subtitle='Custom theme on your profile' month='3'/>

    <div className='buttons'> <button onClick={back}> Back</button><button onClick={next}>NEXT STEP</button></div>


</form>
  )
}

export default FormThree