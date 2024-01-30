import { Weather } from './weather';

export interface WeatherResponse {
  total: number,
  results: Weather[]
}