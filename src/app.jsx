import React from "react";
import RestaurantCard from "./components/RestuarantCard/RestuarantCard";
import res_list from './data/res_list.json';

export default function Body() {
  
  return (
    <div className="body">
      <div className="search">search bar here !</div>
      <div className="res-cont">
        { res_list.map((res_data) => <RestaurantCard res_data={{ code: 200, ...res_data }} />) }
      </div>
    </div>
  );
};