import React from 'react';

const AddOns = (props) => {
    let {title,subtitle,month}=props;
  return (
  <>
    <div className="add-ons-container">
        <div className="add-ons-info">
            <input type="checkbox" className="add-ons-checkbox"/>
            <div className="add-ons-text">
                <h3 className="add-ons-title">{title}</h3>
                <p className="add-ons-subtitle">{subtitle}</p> 
               
            </div>
         
        </div>
           <div className="add-ons-price">+${month}/mo</div>
    </div>

  
  </>
  )
}

export default AddOns