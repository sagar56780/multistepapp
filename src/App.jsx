import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormFour from "./components/forms/FormFour";
import FormOne from "./components/forms/FormOne";
import FormThree from "./components/forms/FormThree";
import FormTwo from "./components/forms/FormTwo";

import Container from "./components/Container";


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
        <RouterProvider router={router}>
          <Container router={router}></Container>
        </RouterProvider>
      }
    </>
  );
};

export default App;
