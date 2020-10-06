import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export interface Country {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  // get with query string
  getCountry(): Observable<Country> {
    const endpoint = environment.API;
    const getdata = `https://restcountries.eu/rest/v2/name/aaaa?fullText=true`;
    return this.http.get<Country>(getdata).pipe(
      map(res => res),
      catchError(error => throwError(error))
    );
  }

  // post json type
  addCountry() {
    const endpoint = environment.API;
    const parameter: Country = {
      name: "test"
    };
    return this.http.post(endpoint, parameter).pipe(
      map(res => res),
      catchError(error => throwError(error))
    );
  }

  // post with form data
  addCountryByForm() {
    const endpoint = environment.API;
    const formData = new FormData();
    formData.append('name', 'test name');
    return this.http.post(endpoint, formData).pipe(
      map(res => res),
      catchError(error => throwError(error))
    );
  }


}
