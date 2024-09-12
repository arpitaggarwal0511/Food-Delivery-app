import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Rescard from "./components/Rescard";
import Shimmer from "./components/Shimmer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";

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
      }
    ],
    errorElement:<Error/>
  }
])

root.render(<RouterProvider router={appRouter} />);
