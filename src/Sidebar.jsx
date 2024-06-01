import React from 'react'
import StepComponent from './StepComponent'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <article> 
   

    <StepComponent title="YOUR INFO" num='1'></StepComponent>
    <StepComponent title="SELECT PLAN" num='2'></StepComponent>

    <StepComponent title="ADD-ONS" num='3'></StepComponent>

    <StepComponent title="SUMMARY" num='4'></StepComponent>

  

</article>
  )
}

export default Sidebar