import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Forecast from "../models/Forecast";
import ForecastItem from "./ForecastItem";

let mockForecast: Forecast = {
  dt: 1632156803,
  main: {
    temp: 65,
    feels_like: 65,
    temp_min: 60,
    temp_max: 70,
    humidity: 70,
  },
  weather: [
    {
      main: "Cloudy",
      description: "pretty cloudy",
      icon: "01B",
    },
  ],
};

test("ForecastItem renders the temperature in Fahrenheit", () => {
  render(
    <Router>
      <ForecastItem forecast={mockForecast} />
    </Router>
  );
  const temp = screen.getByText(/65/i);
  expect(temp).toBeInTheDocument();
});

test("ForecastItem renders the weather icon with weather.main as alt text", () => {
  render(
    <Router>
      <ForecastItem forecast={mockForecast} />
    </Router>
  );
  const icon = screen.getByRole("img");
  const alt = screen.getByAltText(/cloudy/i);
  expect(icon).toBeInTheDocument();
  expect(alt).toBeInTheDocument();
  expect(icon).toEqual(alt);
});

test("ForecastItem translates UNIX to time and date readable by humans", () => {
  render(
    <Router>
      <ForecastItem forecast={mockForecast} />
    </Router>
  );
  const time = screen.getByText(/12:53:23 PM/i);
  const date = screen.getByText(/Mon Sep 20 2021/i);
  expect(time).toBeInTheDocument();
  expect(date).toBeInTheDocument();
});
