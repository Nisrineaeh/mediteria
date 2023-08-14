import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(email: string, mot_de_passe: string) {
    console.log('Appel du service de connexion');
    return this.http.post(this.apiUrl + '/login', { email, mot_de_passe });
  }
  checkConnexion(): boolean {
    return !!localStorage.getItem('access_token');
  }
}