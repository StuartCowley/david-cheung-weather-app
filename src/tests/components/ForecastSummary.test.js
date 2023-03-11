import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const myForecasts = {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
    description: "Clear",
    icon: "800",
  };
  it("renders", () => {
    const { getByText } = render(
      <ForecastSummary
        date={myForecasts.date}
        temperature={myForecasts.temperature}
        description={myForecasts.description}
        icon={myForecasts.icon}
      />
    );
    expect(getByText(1525046400000)).toBeTruthy();
    expect(getByText("11°C")).toBeTruthy();
    expect(getByText("Clear")).toBeTruthy();
    expect(getByText("800")).toBeTruthy();
    expect(getByText(1525046400000)).toBeInstanceOf(HTMLDivElement);
    expect(getByText("11°C")).toBeInstanceOf(HTMLDivElement);
    expect(getByText("Clear")).toBeInstanceOf(HTMLDivElement);
    expect(getByText("800")).toBeInstanceOf(HTMLDivElement);
  });
});
