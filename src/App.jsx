import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormFour from './FormFour'
import FormOne from './FormOne'
import FormThree from './FormThree'
import FormTwo from './FormTwo'
import Sidebar from './Sidebar'
 
const App = () => {



  return (
    <div className="container">
         <section>
            <div className='info-container'>
             <BrowserRouter>
            <Sidebar/>
              <Routes>
                <Route path='/' element={<FormOne></FormOne>} ></Route>
                <Route path='/form2' element={<FormTwo/>} ></Route>
                <Route path='/form3' element={<FormThree/>} ></Route>
                <Route path='/form4' element={<FormFour/>} ></Route>
              </Routes>
          </BrowserRouter>
          <div className='buttons'> <button > Back</button><button onClick>NEXT STEP</button></div>
          </div>

         

                

            
        
       
      

    </section>
    </div>
    
   
  )
}

export default App