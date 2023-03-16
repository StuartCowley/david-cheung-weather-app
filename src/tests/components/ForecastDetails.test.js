import React from "react";
import { render } from "@testing-library/react";
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
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    // We need at least 2 tests. One for snapshot testing, and one for values

    expect(getByText("Mon 30th Apr")).toBeTruthy();
    expect(getByText("Max temperature: 22°C")).toBeTruthy();
    expect(getByText("Min temperature: 12°C")).toBeTruthy();
    expect(getByText("Humidity: 50")).toBeTruthy();
    expect(getByText("Wind: 8mph")).toBeTruthy();

    expect(getByText("Mon 30th Apr")).toBeInstanceOf(HTMLDivElement);
    expect(getByText("Max temperature: 22°C")).toBeInstanceOf(HTMLDivElement);
    expect(getByText("Min temperature: 12°C")).toBeInstanceOf(HTMLDivElement);
    expect(getByText("Humidity: 50")).toBeInstanceOf(HTMLDivElement);
    expect(getByText("Wind: 8mph")).toBeInstanceOf(HTMLDivElement);

    expect(getByText("Mon 30th Apr")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("Max temperature: 22°C")).toHaveAttribute(
      "class",
      "forecast-details__temperature-max"
    );
    expect(getByText("Min temperature: 12°C")).toHaveAttribute(
      "class",
      "forecast-details__temperature-min"
    );
    expect(getByText("Humidity: 50")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(getByText("Wind: 8mph")).toHaveAttribute(
      "class",
      "forecast-details__wind"
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-details__date");
    expect(getByText("Max temperature: 22°C")).toHaveClass(
      "forecast-details__temperature-max"
    );
    expect(getByText("Min temperature: 12°C")).toHaveClass(
      "forecast-details__temperature-min"
    );
    expect(getByText("Humidity: 50")).toHaveClass("forecast-details__humidity");
    expect(getByText("Wind: 8mph")).toHaveClass("forecast-details__wind");
  });
});
