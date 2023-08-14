import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';
  isConnected : boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, mot_de_passe: string) {
    console.log('Appel')
    return this.http.post(this.apiUrl + '/login', { email, mot_de_passe });
  }
  checkConnexion(): boolean {
    // Vérifiez si l'utilisateur est connecté. Ceci est un exemple basé sur la présence d'un token.
    this.isConnected = !!localStorage.getItem('access_token');
    return this.isConnected;


}
}