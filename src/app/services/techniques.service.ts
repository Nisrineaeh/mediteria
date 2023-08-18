import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechniqueMeditation } from '../models/technique-meditation';

@Injectable({
  providedIn: 'root'
})
export class TechniquesService {
  
  private apiUrl = 'http://localhost:8080/technique-meditation'

  constructor(private http: HttpClient) { }

  geteTechnique(): Observable<TechniqueMeditation[]> {
    return this.http.get<TechniqueMeditation[]>(`${this.apiUrl}`);
  }

  getMeditationById(id: number): Observable<TechniqueMeditation> {
    return this.http.get<TechniqueMeditation>(`${this.apiUrl}/${id}`);
  }

  addTechnique(technique: TechniqueMeditation): Observable<TechniqueMeditation>{
    return this.http.post<TechniqueMeditation>(this.apiUrl, technique);
  }

}