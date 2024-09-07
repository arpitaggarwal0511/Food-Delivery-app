import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Rescard from "./components/Rescard";
import Shimmer from "./components/Shimmer";


const root = ReactDOM.createRoot(document.getElementById("root"));



const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<Layout />);
