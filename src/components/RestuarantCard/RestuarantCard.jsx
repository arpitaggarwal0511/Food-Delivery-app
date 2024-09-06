import React from "react";
import './RestuarantCard.css'

function RestaurantCard({ res_data = { code: "404", info: {} } }) {
  const {
    info: {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    },
    code
  } = res_data;
  return code === "404" ? (
    <div>'No data Provided'</div>
  ) : (
    <div className="res-card">
      <img className="k1" src={cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
}

export default RestaurantCard;