import Weather from "../models/Weather";
import "./WeatherItem.css";

interface Props {
  weather: Weather;
}

const WeatherItem = ({ weather }: Props) => {
  return (
    <div className="WeatherItem">
      <div className="weatherText">
        <h3>city: {weather.name}</h3>
        <p>
          current temperature: {weather.main.temp} F (
          {Math.round((weather.main.temp - 32) * (5 / 9) * 100) / 100} C)
        </p>
        <p>feels like: {weather.main.feels_like} F</p>
        <p>max temp: {weather.main.temp_max} F</p>
        <p>min temp: {weather.main.temp_min} F</p>
        <p>humidity: {weather.main.humidity}%</p>
        <p>{weather.weather[0].description}</p>
      </div>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].main}
      />
    </div>
  );
};

export default WeatherItem;
