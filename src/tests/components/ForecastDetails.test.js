import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

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

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders", () => {
    render(<ForecastDetails forecast={validProps} />);

    // We need at least 2 tests. One for snapshot testing, and one for values

    expect(screen.getByText("Mon 30th Apr")).toBeTruthy();
    expect(screen.getByText("Max temperature: 22°C")).toBeTruthy();
    expect(screen.getByText("Min temperature: 12°C")).toBeTruthy();
    expect(screen.getByText("Humidity: 50")).toBeTruthy();
    expect(screen.getByText("Wind: 8mph")).toBeTruthy();

    expect(screen.getByText("Mon 30th Apr")).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText("Max temperature: 22°C")).toBeInstanceOf(
      HTMLDivElement
    );
    expect(screen.getByText("Min temperature: 12°C")).toBeInstanceOf(
      HTMLDivElement
    );
    expect(screen.getByText("Humidity: 50")).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText("Wind: 8mph")).toBeInstanceOf(HTMLDivElement);

    expect(screen.getByText("Mon 30th Apr")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(screen.getByText("Max temperature: 22°C")).toHaveAttribute(
      "class",
      "forecast-details__temperature-max"
    );
    expect(screen.getByText("Min temperature: 12°C")).toHaveAttribute(
      "class",
      "forecast-details__temperature-min"
    );
    expect(screen.getByText("Humidity: 50")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(screen.getByText("Wind: 8mph")).toHaveAttribute(
      "class",
      "forecast-details__wind"
    );

    expect(screen.getByText("Mon 30th Apr")).toHaveClass(
      "forecast-details__date"
    );
    expect(screen.getByText("Max temperature: 22°C")).toHaveClass(
      "forecast-details__temperature-max"
    );
    expect(screen.getByText("Min temperature: 12°C")).toHaveClass(
      "forecast-details__temperature-min"
    );
    expect(screen.getByText("Humidity: 50")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(screen.getByText("Wind: 8mph")).toHaveClass(
      "forecast-details__wind"
    );
  });
});
