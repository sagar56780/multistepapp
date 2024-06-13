import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import FormFour from "./FormFour";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";
import Sidebar from "./Sidebar";
import Container from "./Container";

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
          path: "/form2",
          element: <FormTwo />,
        },
        {
          path: "/form3",
          element: <FormThree />,
        },
        {
          path: "/form4",
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
