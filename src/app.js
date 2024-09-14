import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Restmenu from "./components/Restmenu";

const root = ReactDOM.createRoot(document.getElementById("root"));



const Layout = () => {
  return (
    <div className="app">
      <Header />
    <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<Restmenu/>
      }
      
    ],
    errorElement:<Error/>
  }
])

root.render(<RouterProvider router={appRouter} />);
