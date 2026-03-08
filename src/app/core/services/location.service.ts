import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface CountryData {
  iso2: string;
  country: string;
  cities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private http = inject(HttpClient);

  getCountriesAndCities(): Observable<CountryData[]> {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries')
      .pipe(
        map(response => response.data)
      );
  }
}
