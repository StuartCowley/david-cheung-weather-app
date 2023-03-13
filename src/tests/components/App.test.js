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
});

describe("App", () => {
  it("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
