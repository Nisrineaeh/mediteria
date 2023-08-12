import { Component, OnInit } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-launding',
  templateUrl: './launding.component.html',
  styleUrls: ['./launding.component.css']
})
export class LaundingComponent{

  techniques!: TechniqueMeditation[];

  constructor(private techniquesService: TechniquesService) { }

  ngOnInit() {
    // Chargez les techniques de méditation lors de l'initialisation du composant
    this.loadMeditationTechniques();
  }

  loadMeditationTechniques() {

    this.techniquesService.geteTechnique().subscribe((technique) => {
      this.techniques = technique;
      console.log(this.techniques)
    })
  }

  }


