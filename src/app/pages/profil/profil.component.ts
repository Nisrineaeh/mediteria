import { Component } from '@angular/core';
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
export class ProfilComponent {
  monUnivers: TechniqueMeditation[]=[];
  user!: Utilisateur;
  favoriteTechniques: TechniqueMeditation[]=[];

  constructor(private techService: TechSelectService, private userService: UtilisateursService, private router: Router){
    this.monUnivers = this.techService.getSelectedTech();
  }

  deconnexion() {
    localStorage.removeItem('access_token'); // Supprimer le token d'authentification
    this.router.navigate(['/connexion']); // Rediriger vers la page de connexion
  }

}
