import React from "react";
import { render, screen } from "@testing-library/react";
// import App from "./App";          << platform is incorrect
import App from "../../components/App";
import forecast from "../../data/forecast.json";

it("renders learn react link", () => {
  const { getByText } = render(
    <App location={forecast.location} forecasts={forecast.forecasts} />
  );
  expect(getByText("Manchester, UK")).toBeTruthy();
  expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  expect(getByText(1525046400000)).toBeTruthy();
  expect(getByText("11°C")).toBeTruthy();
  expect(getByText("Clear")).toBeTruthy();
  expect(getByText("800")).toBeTruthy();
  expect(getByText(1525046400000)).toBeInstanceOf(HTMLDivElement);
  expect(getByText("11°C")).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Clear")).toBeInstanceOf(HTMLDivElement);
  expect(getByText("800")).toBeInstanceOf(HTMLDivElement);
});

describe("App", () => {
  it("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
