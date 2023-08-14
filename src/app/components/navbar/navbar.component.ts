import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isConnected: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.checkConnection();
  }

  checkConnection(): void {
    // Vérifiez si l'utilisateur est connecté. Ceci est un exemple basé sur la présence d'un token.
    this.isConnected = !!localStorage.getItem('access_token');
  }
}