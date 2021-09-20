import Forecast from "../models/Forecast";
import "./ForecastItem.css";

interface Props {
  forecast: Forecast;
}

const ForecastItem = ({ forecast }: Props) => {
  let date = new Date(forecast.dt * 1000);
  let timeStr = date.toLocaleTimeString();
  let dateStr = date.toDateString().toLowerCase();

  return (
    <li className="ForecastItem">
      <div>
        <p>
          {dateStr}, {timeStr}
        </p>
        <p>
          temperature: {forecast.main.temp} F /{" "}
          {Math.round((forecast.main.temp - 32) * (5 / 9) * 100) / 100} C
        </p>
        <p>{forecast.weather[0].description}</p>
      </div>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].main}
      />
    </li>
  );
};

export default ForecastItem;
