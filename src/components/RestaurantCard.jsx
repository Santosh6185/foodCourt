import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({
  name,
  imageId,
  deliveryTime,
  avgRating,
  cost,
}) => {
  return (
    <div className="res-cart hover:border hover:border-slate-600 bg-green-50 rounded-md m-2 hover:cursor-pointer w-fit overflow-hidden">
      <img src={CDN_URL + imageId} alt="food_image" width={240} />
      <div className="px-4 pt-2">
        <h3>{name}</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4 className="text-green-900">{avgRating}</h4>
        <h4>Rs {cost / 100} for two.</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>

    </div>
  );
};


//Higher order component
export const withPromotedLabel = (RestaurantCard) => {
  //we are basically returning new componet which is created using RestaurantCard
  return (props) => {
    

    return (
      <div className="relative">
        <div className="absolute border-[5.5px] top-6 border-l-orange-700 border-b-orange-700 rotate-180 border-transparent"></div>
        <label className="absolute bg-orange-700 text-white px-3 font-medium">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );


  };
};

export default RestaurantCard;

