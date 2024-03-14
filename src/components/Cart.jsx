import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

export const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="md:px-20">
      {cartItem.map((el) => (
        <div className="mx-2 relative rounded-md items-center overflow-hidden flex justify-between bg-orange-100">
          <div className="mx-6 flex flex-col gap-2">
            <h3 className="text-lg font-medium">{el.card.info.name} </h3>
            <h4 className="font-medium text-gray-800">
              ₹ {el.card.info.price}
            </h4>
            <p className="text-sm text-gray-600">{el.card.info.description}</p>
          </div>

          <img
            src={CDN_URL + el?.card?.info?.imageId}
            alt={el.card.info.title}
            className="h-[120px] rounded-md m-3"
          />
        </div>
      ))}
    </div>
  );
};


