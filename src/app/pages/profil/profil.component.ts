import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { TechSelectService } from 'src/app/services/tech-select.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  monUnivers: TechniqueMeditation[]=[];
  userData!: Utilisateur;
 

  constructor(private techService: TechSelectService, private userService: UtilisateursService, private router: Router){
    this.monUnivers = this.techService.getSelectedTech();
  }
  ngOnInit(): void {
    const userEmail = localStorage.getItem('user_email');
    if (userEmail) {
      this.userService.findByEmail(userEmail).subscribe({
        next: (data: Utilisateur | null) => {
          if (data) { // Vérifiez si les données ne sont pas nulles
            this.userData = data;
            console.log(this.userData);
          } else {
            console.error('Aucune donnée utilisateur trouvée pour cet email.');
          }
        },
        error: error => {
          console.error('Erreur lors de la récupération des données utilisateur:', error);
        }
        // Si vous voulez également gérer la complétion, ajoutez:
        // complete: () => { console.log('Complété'); }
      });
    } else {
      console.error('Email non trouvé dans le stockage local');
    }
  }

  deconnexion() {
    localStorage.removeItem('access_token'); // Supprimer le token d'authentification
    this.router.navigate(['/connexion']); // Rediriger vers la page de connexion
  }

}
