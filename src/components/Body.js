import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRest, setFilterRest] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
            className="searchbox"
          />

          <button
            onClick={() => {
              const filterRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilterRest(filterRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRest(filteredList);
          }}
        >
          Top Rated Restaurants!
        </button>
      </div>

      <div className="res-cont">
        {filterRest.map((rest) => (
          <Rescard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
