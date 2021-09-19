import { useState } from "react";
import { getCurrentWeather } from "../services/OpenWeatherMapAPIService";
import "./Landing.css";
import WeatherItem from "./WeatherItem";

const Landing = () => {
  const [weather, setWeather] = useState<any>(undefined);

  const getWeather = () => {
    const success = async (position: any) => {
      let longitude = await position.coords.longitude;
      let latitude = await position.coords.latitude;
      getCurrentWeather(longitude, latitude).then((data) => {
        setWeather(data);
      });
    };
    const error = () => {
      console.log("Error");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <div className="Landing">
      {!weather ? (
        <button onClick={getWeather}>Get local weather</button>
      ) : (
        <ul>
          <WeatherItem weather={weather} />
        </ul>
      )}
    </div>
  );
};

export default Landing;
