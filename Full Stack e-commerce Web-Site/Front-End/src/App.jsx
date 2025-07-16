import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Layout/AppLayout";
import "./App.css"
import { Products } from "./Pages/Products";
import { AddProducts } from "./Pages/AddProduct";
import { UpdateProducts } from "./Pages/Update";
import { LogOut } from "./Pages/LogOut";
import { Profile } from "./Pages/Profile";
import { ErrorPage } from "./Pages/ErrorPage";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./UI/privateComponent";
import LogIn from "./Pages/LogIn";
import { SpecialPage } from "./Pages/specialPage";





const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/',
            element: <Products />
          },
          {
            path: '/add',
            element: <AddProducts />
          },
          {
            path: '/update/:id',
            element: <UpdateProducts />
          },
          {
            path: '/logout',
            element: <LogOut />
          },
          {
            path: '/profile',
            element: <Profile />
          },
        ]
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/special',
        element: <SpecialPage />
      }

    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;

