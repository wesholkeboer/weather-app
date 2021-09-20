import axios from "axios";

const appid = process.env.REACT_APP_OPENWEATHERMAP_APP_ID;

export const getCurrentWeather = async (
  lon: number,
  lat: number
): Promise<any> => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/find?",
    {
      params: {
        cnt: 1,
        units: "imperial",
        lon,
        lat,
        appid,
      },
    }
  );
  return response.data.list[0];
};

export const getFiveDayWeather = async (
  lon: number,
  lat: number
): Promise<any> => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?",
    {
      params: {
        units: "imperial",
        lon,
        lat,
        appid,
      },
    }
  );
  return response.data;
};
