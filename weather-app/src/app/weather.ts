export interface Weather {
  weather: Weatherinfo[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wing: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name:string;


}
interface Weatherinfo {
  main: string;
  icon: string;
}
