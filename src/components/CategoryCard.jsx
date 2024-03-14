import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CategoryCard = ({ title, itemCards, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleAdd = (el) => {
    dispatch(addItem(el));
  };

  return (
    <div className="hover:cursor-pointer">
      <div
        className=" rounded-md py-2 px-3 shadow-lg flex items-center justify-between"
        onClick={setIsOpen}
      >
        <h1 className="font-medium text-lg ">
          {title} ({itemCards.length})
        </h1>

        {/**
         * Conditional rendering
         * if isOpen is true then down arrow or vice verca
         */}
        {isOpen ? (
          <IoChevronUpOutline size={22} color="grey" />
        ) : (
          <IoChevronDownOutline size={22} color="grey" />
        )}
      </div>
      <div className={isOpen ? "flex flex-col gap-2 my-2" : "hidden"}>
        {itemCards.map((el) => (
          <div className="mx-2 relative rounded-md items-center overflow-hidden flex justify-between bg-orange-100">
            <div className="mx-6 flex flex-col gap-2">
              <h3 className="text-lg font-medium">{el.card.info.name} </h3>
              <h4 className="font-medium text-gray-800">
                ₹ {el.card.info.price}
              </h4>
              <p className="text-sm text-gray-600">
                {el.card.info.description}
              </p>
            </div>

            <img
              src={CDN_URL + el?.card?.info?.imageId}
              alt={el.card.info.title}
              className="h-[120px] rounded-md m-3"
            />
            <button
              onClick={() => {
                handleAdd(el);
                console.log("click", el)
              }}
              className="absolute bg-red-600 rounded-md bottom-5 hover:cursor-pointer right-10 text-white font-semibold px-2 text-2xl"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryCard;
