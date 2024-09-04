import Rescard from "./Rescard";
import resList from "../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">search bar here !</div>
        <div className="res-cont">
      {
          resList.map((rest)=>(
              <Rescard key={rest.info.id } resData={rest}/>
          ))
      }
        </div>
      </div>
    );
  };

  export default Body;