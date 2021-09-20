import Forecast from "../models/Forecast";
import "./ForecastItem.css";

interface Props {
  forecast: Forecast;
}

const ForecastItem = ({ forecast }: Props) => {
  let date = new Date(forecast.dt * 1000);
  let timeStr = date.toLocaleTimeString();
  let dateStr = date.toDateString();

  return (
    <li className="ForecastItem">
      <p>
        {timeStr}, {dateStr}
      </p>
      <p>
        temperature: {forecast.main.temp} F /{" "}
        {Math.round((forecast.main.temp - 32) * (5 / 9) * 100) / 100} C
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].main}
      />
    </li>
  );
};

export default ForecastItem;
