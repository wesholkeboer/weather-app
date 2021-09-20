import { useState } from "react";
import Forecasts from "../models/Forecasts";
import { getFiveDayWeather } from "../services/OpenWeatherMapAPIService";
import "./FiveDayTemp.css";
import ForecastItem from "./ForecastItem";

const FiveDayTemp = () => {
  const [forecasts, setForecasts] = useState<Forecasts>();

  const getForecast = () => {
    const success = async (position: any) => {
      let lon = await position.coords.longitude;
      let lat = await position.coords.latitude;
      await getFiveDayWeather(lon, lat).then((data) => {
        setForecasts(data);
      });
    };
    const error = () => {
      console.log("Error");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const handleClick = () => {
    getForecast();
  };

  return (
    <div className="FiveDayTemp">
      {!forecasts ? (
        <button onClick={handleClick}>get your five day forecast</button>
      ) : (
        <div>
          <h4>upcoming weather for {forecasts.city.name}</h4>
          <ul>
            {forecasts.list.map((forecast) => {
              return <ForecastItem forecast={forecast} key={forecast.dt} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FiveDayTemp;
