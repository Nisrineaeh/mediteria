import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { TechSelectService } from 'src/app/services/tech-select.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  monUnivers: TechniqueMeditation[] = [];
  userData!: Utilisateur;
  utilisateur!: Utilisateur;

  constructor(
    private techService: TechSelectService,
    private userService: UtilisateursService,
    private router: Router
  ) {
    this.monUnivers = this.techService.getSelectedTech();
  }

  ngOnInit(): void {
    this.loadUserInfo();
    this.loadUserDataFromEmail();
  }

  loadUserInfo(): void {
    this.userService.getUserById(1).subscribe(data => {
      this.utilisateur = data;
    });
  }

  loadUserDataFromEmail(): void {
    const userEmail = localStorage.getItem('user_email');
    if (userEmail) {
      this.userService.findByEmail(userEmail).subscribe({
        next: (data: Utilisateur | null) => {
          if (data) {
            this.userData = data;
            console.log(this.userData);
          } else {
            console.error('Aucune donnée utilisateur trouvée pour cet email.');
          }
        },
        error: error => {
          console.error('Erreur lors de la récupération des données utilisateur:', error);
        }
      });
    } else {
      console.error('Email non trouvé dans le stockage local');
    }
  }

  deconnexion(): void {
    localStorage.removeItem('access_token'); // Supprimer le token d'authentification
    this.router.navigate(['/connexion']); // Rediriger vers la page de connexion
  }



}