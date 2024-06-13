
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormFour from './FormFour'
import FormOne from './FormOne'
import FormThree from './FormThree'
import FormTwo from './FormTwo'
import Sidebar from "./Sidebar"



 

const App = () => {


  let router=createBrowserRouter([
    {
      path:'/',
      element:<FormOne/>
    },
    {
      path:'/form2',
      element:<FormTwo/>
    },
    {
      path:'/form3',
      element:<FormThree/>
    },
    {
      path:'/form4',
      element:<FormFour/>
    }
  ])
  return (
     <>
     <div className='container'> 
      <section>
          <Sidebar ></Sidebar>
          <div className='info-container'>
        
          </div>
          {    <RouterProvider router={router} >

                </RouterProvider>
          }
     
      </section>
   
    </div> 
    </>
  
  
 

  )
}

export default App