import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(name: string): Observable<any> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.http.get(url);
  }

}
