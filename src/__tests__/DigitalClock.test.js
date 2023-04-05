import React from "react";
import { render, screen } from "@testing-library/react";
import DigitalClock from "../components/DigitalClock";
import renderer from "react-test-renderer";

describe("DigitalClock", () => {
  test("Renders as expected", () => {
    Date.now = jest.fn(() => 1482363367071);

    const rendered = renderer.create(<DigitalClock />);

    expect(rendered).toMatchSnapshot();
  });
});
