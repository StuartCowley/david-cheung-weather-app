import React from "react";
import { render, screen } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";
import renderer from "react-test-renderer";

describe("LocationDetails", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(
      <LocationDetails city="testCity" country="testCountry" />
    );
    expect(rendered).toMatchSnapshot();
  });

  test("Assert city and location are present", () => {
    render(<LocationDetails city="testCity" country="testCountry" />);
    expect(screen.getByText("testCity, testCountry")).toBeTruthy(); //  if the text exists as expected with toBeTruthy()
    expect(screen.getByText("testCity, testCountry")).toBeInstanceOf(
      HTMLHeadingElement
    ); //  more specific with our tests
    expect(screen.getByText("testCity, testCountry")).toHaveClass(
      "location-details"
    );
  });
});
