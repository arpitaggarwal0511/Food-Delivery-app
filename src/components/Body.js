import Rescard from "./Rescard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  const [ulist,setulist ]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const flist = ulist.filter((res) => res.info.avgRating > 4.5);
            setulist(flist);
          }}  
        >
          Top Rated Restaurants !
        </button>
      </div>

      <div className="res-cont">
        {resList.map((rest) => (
          <Rescard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
