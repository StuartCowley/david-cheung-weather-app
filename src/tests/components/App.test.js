import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";
//import forecast from "../../data/forecast.json";
import axios from "axios";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  xit("renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders learn react link", () => {
    const mAxiosResponse = {
      data: {
        location: {
          city: "testCity",
          country: "testCountry",
        },
        forecasts: [
          {
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
          },
          {
            date: 1525132800000,
            temperature: {
              max: 13,
              min: 8,
            },
            wind: {
              speed: 60,
              direction: "ne",
            },
            humidity: 80,
            description: "Stormy",
            icon: "211",
          },
          {
            date: 1525219200000,
            temperature: {
              max: 1,
              min: -2,
            },
            wind: {
              speed: 5,
              direction: "n",
            },
            humidity: 50,
            description: "Heavy Snow",
            icon: "602",
          },
          {
            date: 1525305600000,
            temperature: {
              max: 20,
              min: 4,
            },
            wind: {
              speed: 150,
              direction: "e",
            },
            humidity: 80,
            description: "Tornado",
            icon: "781",
          },
          {
            date: 1525392000000,
            temperature: {
              max: 25,
              min: 18,
            },
            wind: {
              speed: 8,
              direction: "nne",
            },
            humidity: 50,
            description: "Hazy",
            icon: "721",
          },
        ],
      },
    };
    jest.spyOn(axios, "get").mockResolvedValue(mAxiosResponse);
    render(<App />);

    expect(screen.getByText("testCity, testCountry")).toBeTruthy();
    expect(screen.getByText("testCity, testCountry")).toBeInstanceOf(
      HTMLHeadingElement
    );
  });

  xit("renders App component correctly", () => {
    render(<App />);
    const h1Element = screen.getByText(/Manchester, GB/i);
    expect(h1Element).toBeInTheDocument();
  });
});
