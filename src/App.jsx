import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import FormFour from "./components/forms/FormFour";
import FormOne from "./components/forms/FormOne";
import FormThree from "./components/forms/FormThree";
import FormTwo from "./components/forms/FormTwo";

import Container from "./components/Container";
import { Children, createContext } from "react";
export let MyContext=createContext();
let student={
  name:'sagar'
}

const App = () => {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          path: "/",
          element: <FormOne></FormOne>,
        },
        {
          path: "form2",
          element: <FormTwo />,
        },
        {
          path: "form3",
          element: <FormThree />,
        },
        {
          path: "form4",
          element: <FormFour />,
        },
      ],
    },
  ]);
  return (
    <>
     
  
      {
        <MyContext.Provider value={student}>
    
        <RouterProvider router={router}>
          <Container router={router}></Container>
        </RouterProvider>
        </MyContext.Provider>
      }
    </>
  );
};

export default App;
