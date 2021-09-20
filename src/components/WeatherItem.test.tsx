import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Weather from "../models/Weather";
import WeatherItem from "./WeatherItem";

const mockWeather: Weather = {
  name: "Toledo",
  main: {
    temp: 65,
    feels_like: 66,
    temp_min: 60,
    temp_max: 70,
    humidity: 78,
  },
  weather: [
    {
      main: "Cloudy",
      description: "pretty cloudy",
      icon: "40B",
    },
  ],
};

test("WeatherItem renders the city name, temperature, and weather description if available", () => {
  render(
    <Router>
      <WeatherItem weather={mockWeather} />
    </Router>
  );
  const city = screen.getByText(/Toledo/i);
  const desc = screen.getByText(/pretty cloudy/i);
  const temp = screen.getByText(/65/i);
  expect(city).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
  expect(temp).toBeInTheDocument();
});
