import { useState } from "react";
import { getCurrentWeather } from "../services/OpenWeatherMapAPIService";
import "./Landing.css";

const Landing = () => {
  // const [long, setLong] = useState<number | undefined>(undefined);
  // const [lat, setLat] = useState<number | undefined>(undefined);
  const [weather, setWeather] = useState<any>();

  const getWeather = () => {
    let success = async (position: any) => {
      let longitude = await position.coords.longitude;
      let latitude = await position.coords.latitude;
      console.log(longitude, latitude);
      getCurrentWeather(longitude, latitude).then((data) => {
        console.log(data);
      });
    };
    let error = () => {
      console.log("Error");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const handleClick = () => {
    getWeather();
  };

  return (
    <div className="Landing">
      <button onClick={handleClick}>Get local weather</button>
    </div>
  );
};

export default Landing;
