export interface WeatherInfo{
  "time": string,
  "temperature_2m": number
}

export interface WeatherInfoResponse{
  current:WeatherInfo
}
