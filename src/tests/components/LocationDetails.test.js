import React from "react";
import { render, screen } from "@testing-library/react";
// import LocationDetails from "../components/LocationDetails";     << platform is incorrect
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <LocationDetails city="Manchester" country="UK" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct city and location props", () => {
    render(<LocationDetails city="Manchester" country="UK" />);
    expect(screen.getByText("Manchester, UK")).toBeTruthy(); //  if the text exists as expected with toBeTruthy()
    expect(screen.getByText("Manchester, UK")).toBeInstanceOf(
      HTMLHeadingElement
    ); //  more specific with our tests
    expect(screen.getByText("Manchester, UK")).toHaveClass("location-details");
  });
});
