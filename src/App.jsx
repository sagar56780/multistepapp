import React from 'react'
import Sidebar from './Sidebar'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
 
const App = () => {
  return (
    <div className="container">
         <section>
            <Sidebar/>
            <FormTwo />
           
        
       
      

    </section>
    </div>
    
   
  )
}

export default App