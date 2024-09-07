import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

const [btnlog,setbtnlog]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li><button className="login" onClick={()=>{
              if(btnlog=="Login")
              {
                setbtnlog("Logout");
              }
              else{
                setbtnlog("Login");
              }
            }}><h2>{btnlog}</h2></button></li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;