import Weather from "../models/Weather";
import "./WeatherItem.css";

interface Props {
  weather: Weather;
}

const WeatherItem = ({ weather }: Props) => {
  return (
    <li className="WeatherItem">
      <h3>City: {weather.name}</h3>
      <p>
        current temperature: {weather.main.temp} F /{" "}
        {Math.round((weather.main.temp - 32) * (5 / 9) * 100) / 100} C
      </p>
      <p>feels like: {weather.main.feels_like}</p>
      <p>humidity: {weather.main.humidity}</p>
      <h4>{weather.weather[0].main}</h4>
      <p>{weather.weather[0].description}</p>
    </li>
  );
};

export default WeatherItem;
