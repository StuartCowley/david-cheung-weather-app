import React from "react";
import { render } from "@testing-library/react";
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
  };

  it("renders", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        temperature={validProps.temperature}
        description={validProps.description}
        icon={validProps.icon}
      />
    );

    // We need at least 2 tests. One for snapshot testing, and one for values

    expect(getByText("Mon 30th Apr")).toBeTruthy();
    expect(getByText(`22${decode("&deg;C")}`)).toBeTruthy();
    expect(getByText("Stub description")).toBeTruthy();
    // expect(getByTestId("forecast-icon")).toHaveTextContent("200");

    expect(getByText("Mon 30th Apr")).toBeInstanceOf(HTMLDivElement);
    expect(getByText(`22${decode("&deg;C")}`)).toBeInstanceOf(HTMLDivElement);
    expect(getByText("Stub description")).toBeInstanceOf(HTMLDivElement);
    expect(getByTestId("forecast-icon")).toBeInstanceOf(HTMLDivElement);

    expect(getByText("Mon 30th Apr")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecast-summary__icon"
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "data-testid",
      "forecast-icon"
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
