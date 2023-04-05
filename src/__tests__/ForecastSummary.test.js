import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";
import renderer from "react-test-renderer";

function decode(str) {
  let txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Stub description",
    icon: 200,
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: () => {},
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <ForecastSummary
        date={validProps.date}
        temperature={validProps.temperature}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
      />
    );
    expect(rendered).toMatchSnapshot();
  });

  test("Assert all classname elements are present", () => {
    render(
      <ForecastSummary
        date={validProps.date}
        temperature={validProps.temperature}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
      />
    );
    expect(document.querySelector(".forecast-summary")).toBeTruthy();
    expect(document.querySelector(".forecast-summary__date")).toBeTruthy();
    expect(document.querySelector(".forecast-summary__icon")).toBeTruthy();
    expect(
      document.querySelector(".forecast-summary__temperature")
    ).toBeTruthy();
    expect(
      document.querySelector(".forecast-summary__description")
    ).toBeTruthy();
  });

  test("Assert all props elements are present", () => {
    render(
      <ForecastSummary
        date={validProps.date}
        temperature={validProps.temperature}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
      />
    );
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
  });
});
