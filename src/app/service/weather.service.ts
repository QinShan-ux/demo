import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }
  getCityInfoByCityName(keyworld: string) {

  }
}
