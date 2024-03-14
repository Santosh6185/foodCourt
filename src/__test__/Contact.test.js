import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    //Querring
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Button with text Submit should be present", () => {
    render(<Contact />);

    //Querring
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inide Contact component", () => {
    render(<Contact />);

    //Querring
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Two input boxes should be present", () => {
    render(<Contact />);

    //Querring
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
