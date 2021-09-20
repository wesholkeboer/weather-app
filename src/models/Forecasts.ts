import Forecast from "./Forecast";

export default interface Forecasts {
  city: {
    name: string;
  };
  list: Forecast[];
}
