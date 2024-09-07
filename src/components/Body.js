import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchdata();
  },[]);
 const fetchdata=async ()=>{
   const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
    const json= await data.json();
    console.log(json);
setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(listOfRestaurants.length==0)
  {
    return Shimmer; 
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants!
        </button>
      </div>

      <div className="res-cont">
        {listOfRestaurants.map((rest) => (
          <Rescard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );

};

export default Body;
