import React, { useState } from 'react'
import Sidebar from './Sidebar'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FormThree from './FormThree'
import FormFour from './FormFour'
 
const App = () => {

  let [index,setIndex]=useState(3);
  let incrementIndex=()=>{
    setIndex(index+1);
    console.log("hello");
  }
  let decrementIndex=()=>{
    setIndex(index-1);
  }

  return (
    <div className="container">
         <section>
            <Sidebar/>
            <div className='info-container'>
             <BrowserRouter>
              <Routes>
                <Route path={'/'} element={<FormOne></FormOne>} ></Route>
                <Route path={'form2'} element={<FormTwo/>} ></Route>
                <Route path={'form3'} element={<FormThree/>} ></Route>
                <Route path={'form4'} element={<FormFour/>} ></Route>
                
                 
                
                



              </Routes>
              
          </BrowserRouter>
          <div className='buttons'> <button > Back</button><button onClick>NEXT STEP</button></div>
          </div>

         

                

            
        
       
      

    </section>
    </div>
    
   
  )
}

export default App