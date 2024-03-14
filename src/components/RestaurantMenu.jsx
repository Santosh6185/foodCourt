import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const [isOpen, setIsOpen] = useState();
  const resInfo = useRestaurantMenu(resId);

  const itemCategory =
    resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (el) =>
        el?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category", itemCategory);


  
  /***
   * Lifting the state up so that CategoryCard can be controlled compnent
   * 
   * CONTROLLED COMPONENT :- component in which behavious is controlled by parent compnent
   * 
   * UNCONTROLLED COMPONENT :- component which control its behavious itself
   */
  const createCategories = (
    {
      card: {
        card: { title, itemCards },
      },
    },
    ind
  ) => {
    return (
      <CategoryCard
        key={title}
        title={title}
        itemCards={itemCards}
        isOpen={isOpen == ind}
        // if use will click on previously open card then close it other wise open the card
        setIsOpen={() => {
          setIsOpen((prev) => (prev == ind ? -1 : ind));
        }}
      />
    );
  };

  const data = resInfo[0]?.card?.card?.info;

  return data == undefined ? (
    <Shimmer />
  ) : (
    <div className="mx-8 my-2">
      <div className="text-center my-4">
        <h1 className="text-4xl font-medium">{data.name}</h1>
        <h3>
          {data.cuisines.join(", ")} - {"Rs. "} {data.costForTwoMessage}{" "}
        </h3>
      </div>

      <div className="flex flex-col gap-4 md:w-[45%] sm:w-[80%] mx-auto">
        <h1 className="text-3xl font-medium text-center my-2">Categories</h1>
        {itemCategory.map((el, ind) => createCategories(el, ind))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
