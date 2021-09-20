import { useState } from "react";
import { getCurrentWeather } from "../services/OpenWeatherMapAPIService";
import "./Landing.css";
import WeatherItem from "./WeatherItem";

const Landing = () => {
  const [weather, setWeather] = useState<any>();

  const getWeather = () => {
    const success = async (position: any) => {
      let lon = await position.coords.longitude;
      let lat = await position.coords.latitude;
      getCurrentWeather(lon, lat).then((data) => {
        setWeather(data);
      });
    };
    const error = () => {
      console.log("An error occurred in fetching geolocation.");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <div className="Landing">
      {!weather ? (
        <button className="weatherBtn" onClick={getWeather}>
          get local weather
        </button>
      ) : (
        <WeatherItem weather={weather} />
      )}
    </div>
  );
};

export default Landing;
