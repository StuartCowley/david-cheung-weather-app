import React from "react";
import { render, screen } from "@testing-library/react";
// import App from "./App";          << platform is incorrect
import App from "../../components/App";
//import forecast from "../../data/forecast.json";

// const sinon = require("sinon");

it("renders learn react link", () => {
  // const stub1 = sinon.stub(App, "setForecasts").returns(forecast.forecasts);
  // const stub2 = sinon.stub(App, "setLocation").returns({
  //   city: forecast.location.city,
  //   country: forecast.location.country,
  // });
  // const stub3 = sinon
  //   .stub(App, "setSelectedDate")
  //   .returns(forecast.forecasts[0].date);

  const { getByText } = render(<App />);

  expect(getByText("Manchester, UK")).toBeTruthy();
  expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
});

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders App component correctly", () => {
    render(<App />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
