import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

function decode(str) {
  let txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Stub description",
    icon: "200",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        temperature={validProps.temperature}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders", () => {
    render(
      <ForecastSummary
        date={validProps.date}
        temperature={validProps.temperature}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
      />
    );

    // We need at least 2 tests. One for snapshot testing, and one for values

    expect(screen.getByText("Mon 30th Apr")).toBeTruthy();
    expect(screen.getByText(`22${decode("&deg;C")}`)).toBeTruthy();
    expect(screen.getByText("Stub description")).toBeTruthy();
    // expect(getByTestId("forecast-icon")).toHaveTextContent("200");

    expect(screen.getByText("Mon 30th Apr")).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText(`22${decode("&deg;C")}`)).toBeInstanceOf(
      HTMLDivElement
    );
    expect(screen.getByText("Stub description")).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByTestId("forecast-icon")).toBeInstanceOf(HTMLDivElement);

    expect(screen.getByText("Mon 30th Apr")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(screen.getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
    expect(screen.getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(screen.getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecast-summary__icon"
    );
    expect(screen.getByTestId("forecast-icon")).toHaveAttribute(
      "data-testid",
      "forecast-icon"
    );

    expect(screen.getByText("Mon 30th Apr")).toHaveClass(
      "forecast-summary__date"
    );
    expect(screen.getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(screen.getByTestId("forecast-icon")).toHaveClass(
      "forecast-summary__icon"
    );
    expect(screen.getByText("22°C")).toHaveClass(
      "forecast-summary__temperature"
    );
  });
});
