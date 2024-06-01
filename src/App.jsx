import React, { useState } from 'react'
import Sidebar from './Sidebar'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FormThree from './FormThree'
import FormFour from './FormFour'
 
const App = () => {

  let [index,setIndex]=useState(1);
  let incrementIndex=()=>{
    setIndex(index+1);
    console.log("hello");
  }
  let decrementIndex=()=>{
    setIndex(index-1);
  }
  const forms = [
    { path: '/', component: <FormOne next={incrementIndex} /> },
    { path: '/form2', component: <FormTwo next={incrementIndex} back={decrementIndex} /> },
    { path: '/form3', component: <FormThree next={incrementIndex} back={decrementIndex} /> },
    { path: '/form4', component: <FormFour  next={incrementIndex} back={decrementIndex}/> }
  ];
  return (
    <div className="container">
         <section>
            <Sidebar/>
             <BrowserRouter>
              <Routes>
                <Route path={forms[0].path} element={forms[index].component} ></Route>
                 
                



              </Routes>
              
          </BrowserRouter>
            
        
       
      

    </section>
    </div>
    
   
  )
}

export default App