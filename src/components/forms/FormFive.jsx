import React from 'react'
import thankyou from "../assets/thank-you-handwritten-inscription-hand-drawn-lettering-thank-you-calligraphy-thank-you-card-flower-frame_106033-59.jpg"
import { useNavigate } from 'react-router-dom'

const FormFive = () => {
    let nav=useNavigate();
  return (
      <form className="form5">
          <div className="form-container">
            <div className='img-container' > <img  src={thankyou} alt="" height="70%" width="40%" /></div>
            <div className='thank-you-msg'>
                  <h3>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support sagat56780@gmail.com.</h3>
                  
            </div>
          </div>
          <center><button onClick={nav('/')}>exit</button></center>  
         
      </form>
  )
}

export default FormFive