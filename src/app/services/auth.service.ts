import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';
  isConnected: boolean = false;

  constructor(private http: HttpClient) {
    // Initialisez la valeur de isConnected lors de la création du service
    this.checkConnexion();
  }

  login(email: string, mot_de_passe: string) {
    return this.http.post<{ access_token: string, user_id:number }>(this.apiUrl + '/login', { email, mot_de_passe })
      .pipe(
        tap(response => {
          localStorage.setItem('access_token', response.access_token);
          if (response.user_id && Number.isFinite(response.user_id)) {
            localStorage.setItem('user_id', `${response.user_id}`);
            console.log('Id utilisateur stocké:', localStorage.getItem('user_id'))
            console.log(typeof response.user_id)
          } else {
            console.error('user_id is either missing or invalid in the response.');
          }
          this.isConnected = true;
        })
      );
  }

  logout(): void {
    // Supprimez le token du localStorage pour déconnecter l'utilisateur
    localStorage.removeItem('access_token');
    this.isConnected = false;
  }

  checkConnexion(): boolean {
    // Vérifiez si le token est présent pour déterminer si l'utilisateur est connecté
    this.isConnected = !!localStorage.getItem('access_token');
    return this.isConnected;
  }

  getToken(): string | null {
    // Récupérez le token du localStorage
    return localStorage.getItem('access_token');
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('user_id');
    if (userId && !isNaN(Number(userId))) {
      return parseInt(userId, 10);
    }
    console.error('Stored user_id is not a valid number.');
    return null;
  }
}




