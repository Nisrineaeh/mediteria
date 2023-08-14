import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/utilisateur/api/login';

  constructor(private http: HttpClient) { }

  login(username: string, mot_de_passe: string) {
    return this.http.post(this.apiUrl, { username, mot_de_passe });
  }
}