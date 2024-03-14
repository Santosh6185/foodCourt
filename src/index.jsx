import React, { useEffect, useState } from "react";

import RestaurantCard, {
  withPromotedLabel,
} from "./components/RestaurantCard.jsx";
import { API_URL } from "./utils/constants.js";
import Shimmer from "./components/Shimmer.js";
import { Link } from "react-router-dom";

const AppLayout = () => {
  const [listOfRestaturants, setRestaurants] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState();

  //here WithPermotedLabel contains a new component but we have to set its props
  const WithPromotedLabel = withPromotedLabel(RestaurantCard);

  //filtring restaurants on basis of rating
  function getTopRatedResturants() {
    const filteredList = listOfRestaturants.filter(
      (el) => +el.card.card.info.avgRatingString >= 4.5
    );
    setFilterData(filteredList);
  }

  //function to make api request to swiggy api
  const getData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("data", data);
    setRestaurants(
      data.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilterData(
      data.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  //function to create Restaurant cards
  function createCards({
    card: {
      card: {
        info: {
          name,
          id,
          cloudinaryImageId,
          sla: { deliveryTime },
          avgRatingString,
          costForTwo,
          promoted,
        },
      },
    },
  }) {
    return (
      <Link to={"restaurant/" + id}>
        {promoted ? (
          <WithPromotedLabel
            key={id}
            name={name}
            imageId={cloudinaryImageId}
            deliveryTime={deliveryTime}
            avgRating={avgRatingString}
            cost={costForTwo}
          />
        ) : (
          <RestaurantCard
            key={id}
            name={name}
            imageId={cloudinaryImageId}
            deliveryTime={deliveryTime}
            avgRating={avgRatingString}
            cost={costForTwo}
          />
        )}
      </Link>
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <div className="my-4 mx-2 flex gap-2 items-center">
        <div>
          <input
            type="search"
            value={searchText}
            className="border rounded-md mx-2 px-2 outline-none active:outline-blue-200"
            onChange={(el) => {
              setSearchText(el.target.value);
            }}
          />
          <button
            className="border px-2 rounded-md bg-blue-200"
            onClick={() => {
              const data = listOfRestaturants.filter((el) =>
                el.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterData(data);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-200 px-4 py-1 rounded-md hover:cursor-pointer"
          onClick={getTopRatedResturants}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* conditional rendering */}
      {listOfRestaturants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mx-1 my-2 p-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {filterData.map((el) => createCards(el))}
        </div>
      )}
    </div>
  );
};

export default AppLayout;
