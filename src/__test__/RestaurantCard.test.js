import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Test Case", () => {
  it("The name of restaurant to be present inside Restaurant card", () => {
    const {
      name,
      id,
      cloudinaryImageId,
      sla: { deliveryTime },
      avgRatingString,
      costForTwo,
      promoted,
    } = MOCK_DATA.info;

    render(
      <RestaurantCard
        name={name}
        imageId={cloudinaryImageId}
        deliveryTime={deliveryTime}
        avgRating={avgRatingString}
        cost={costForTwo}
      />
    );

    const nameComp = screen.getByText("Shah Ji Foods");

    expect(nameComp).toBeInTheDocument();
  });
});
