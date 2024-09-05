import Rescard from "./Rescard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ulist, setUlist] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const flist = ulist.filter((res) => res.info.avgRating > 4.5);
            setUlist(flist);
          }}
        >
          Top Rated Restaurants!
        </button>
      </div>

      <div className="res-cont">
        {ulist.map((rest) => (
          <Rescard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
