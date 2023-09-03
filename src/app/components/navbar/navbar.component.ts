import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isConnected: boolean = false;
    navbarVisible: boolean = true;

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.checkConnection();
  }

  checkConnection(): void {
    // Vérifiez si l'utilisateur est connecté. Ceci est un exemple basé sur la présence d'un token.
    this.isConnected = !!localStorage.getItem('access_token');
  }


  deconnexion(): void {
    localStorage.removeItem('access_token'); // Supprimer le token d'authentification
    this.router.navigate(['/connexion']); // Rediriger vers la page de connexion
  }
}