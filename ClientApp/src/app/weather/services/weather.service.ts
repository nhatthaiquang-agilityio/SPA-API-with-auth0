import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment as env } from '../../../environments/environment';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseAPIURL: string;

  constructor(public httpClient: HttpClient) {
    this.baseAPIURL = env.baseAPI;
  }

  public getWeathers() {
    return this.httpClient.get<Weather[]>(`${this.baseAPIURL}/weatherforecast`, );
  }
}
