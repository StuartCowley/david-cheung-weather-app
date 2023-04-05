import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";
import renderer from "react-test-renderer";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 50,
    wind: {
      speed: 8,
      direction: "nne",
    },
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(<ForecastDetails forecast={validProps} />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert all classname elements are present", () => {
    render(<ForecastDetails forecast={validProps} />);
    expect(document.querySelector(".forecast-details")).toBeTruthy();
    expect(document.querySelector(".forecast-details__date")).toBeTruthy();
    expect(
      document.querySelector(".forecast-details__temperature")
    ).toBeTruthy();
    expect(document.querySelector(".forecast-details__humidity")).toBeTruthy();
    expect(document.querySelector(".forecast-details__wind")).toBeTruthy();
  });

  test("Assert all props elements are present", () => {
    render(<ForecastDetails forecast={validProps} />);

    // We need at least 2 tests. One for snapshot testing, and one for values
    expect(screen.getByText("Mon 30th Apr")).toBeTruthy();
    expect(screen.getByText("Temperature: 12°C - 22°C")).toBeTruthy();
    expect(screen.getByText("Humidity: 50")).toBeTruthy();
    expect(screen.getByText("Wind: 8mph NNE")).toBeTruthy();

    expect(screen.getByText("Mon 30th Apr")).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText("Temperature: 12°C - 22°C")).toBeInstanceOf(
      HTMLDivElement
    );
    expect(screen.getByText("Humidity: 50")).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText("Wind: 8mph NNE")).toBeInstanceOf(HTMLDivElement);
  });
});
