import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';




@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  private bddUrl = 'http://localhost:8080/utilisateur';

  constructor(private http: HttpClient) { }

  getUtilisateur(id:number){
    return this.http.get<Utilisateur>(`${this.bddUrl}/${id}`)
  }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.bddUrl);
  }

  inscription(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.bddUrl, utilisateur);

  }

  majUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.patch<Utilisateur>(this.bddUrl, utilisateur);
  }

  suppUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(this.bddUrl);
  }

  findByEmail(email: string): Observable<Utilisateur | null> {
    return this.http.get<Utilisateur>(`${this.bddUrl}/findByEmail/${email}`);
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  getUserInfo(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.bddUrl}/me`, {
      headers: this.getHeaders()
    });
  }

  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.bddUrl}/${id}`);
  }
}
