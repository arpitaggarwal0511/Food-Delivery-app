import { CDN_URL } from "../utils/constants";
const Rescard= (props) => {
    const {resData}=props;
   const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}=resData?.info;
 return (
   <div className="res-card">
     <img
       className="k1"
       src={CDN_URL+cloudinaryImageId}
     />
     <h3>{name}</h3>
     <h4>{cuisines.join(", ")}</h4>
     <h4>{avgRating}</h4>
   </div>
 );
};
export default Rescard;