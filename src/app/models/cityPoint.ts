export interface CityInfo {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}
export interface CitySearchResult {
  generationtime_ms: number;
  results: CityInfo[];
}