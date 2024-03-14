import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListMock.json";
import AppLayout from "../index";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search functionality check function", () => {
  it("", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      )
    );

    const searchButton = screen.getByRole("button", { name: "Search" });
  });
});
