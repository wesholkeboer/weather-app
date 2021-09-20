export default interface Weather {
  name: string;
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
