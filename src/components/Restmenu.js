import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const Restmenu = () => {

    const {resId}=useParams()

  const [resinfo, setResInfo] = useState(null);


  useEffect(() => {
    fetchMenu();
  },[]);
  
  const fetchMenu = async() => {
    const data = await fetch(
       MENU_URL +resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);

  };

  console.log(resinfo);

  if(resinfo==null) return <Shimmer/>;

  const {name,cuisines,avgRating,deliveryTime}=resinfo?.cards?.[2]?.card?.card?.info;
  
  const {itemCards}=resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3> Rating : {avgRating} Stars</h3>
      <h3>Delivery Time : {deliveryTime} mins</h3>


      <ul>
        {itemCards.map(item =><li key={item.card.info.id}> {item.card.info.name}  - - - price : {item.card.info.price/100}</li> )}
      </ul>
    </div>
  );
};

export default Restmenu;
