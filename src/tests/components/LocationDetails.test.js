import React from "react";
import { render } from "@testing-library/react";
// import LocationDetails from "../components/LocationDetails";     << platform is incorrect
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );
    expect(getByText("Manchester, UK")).toBeTruthy(); //  if the text exists as expected with toBeTruthy()
    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement); //  more specific with our tests
    expect(getByText("Manchester, UK")).toHaveClass("location-details");
  });
});
