import React from 'react'

const AddOns = (props) => {
    let {title,subtitle,month}=props;
  return (
  <>
    <div class="add-ons-container">
        <div class="add-ons-info">
            <input type="checkbox" class="add-ons-checkbox"/>
            <div class="add-ons-text">
                <h3 class="add-ons-title">{title}</h3>
                <p class="add-ons-subtitle">{subtitle}</p>
            </div>
        </div>
        <div class="add-ons-price">+${month}/mo</div>
    </div>
  
  
  </>
  )
}

export default AddOns