import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { TechniqueMeditation } from '../models/technique-meditation';

@Injectable({
  providedIn: 'root'
})
export class TechniquesService {
  items: TechniqueMeditation[]=[];

  private apiUrl = 'http://localhost:3000/techniques'

  constructor(private http: HttpClient) { }

  geteTechnique(): Observable<TechniqueMeditation[]> {
    return this.http.get<TechniqueMeditation[]>(`${this.apiUrl}`);
  }

  getMeditationById(id: number): Observable<TechniqueMeditation> {
    return this.http.get<TechniqueMeditation>(`${this.apiUrl}/${id}`);
  }

}