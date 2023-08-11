import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { TechniqueMeditation } from '../models/technique-meditation';

@Injectable({
  providedIn: 'root'
})
export class TechniquesService {
  private apiUrl = 'http://localhost:8080/technique-meditation'

  constructor(private http: HttpClient) { }

  getSampleTechniques(): Observable<TechniqueMeditation[]> {
    return this.http.get<TechniqueMeditation[]>(`${this.apiUrl}`);
  }

}