import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import AppLayout from "./UI/AppLayout";
import "./App.css"

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage />
  }
])
export const App1 = ()=>{
  return <RouterProvider router={router}></RouterProvider>
}