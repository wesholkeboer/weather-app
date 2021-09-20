export default interface Forecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
}
