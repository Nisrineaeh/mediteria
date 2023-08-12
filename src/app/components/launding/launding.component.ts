import { Component, OnInit } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-launding',
  templateUrl: './launding.component.html',
  styleUrls: ['./launding.component.css']
})
export class LaundingComponent implements OnInit{

  techniques: TechniqueMeditation[]= [];
  constructor(private techService: TechniquesService){}

  ngOnInit(): void {
    this.loadTech();
  }

  loadTech(){
    this.techService.geteTechnique().subscribe({
      next: (data) => {
        this.techniques = data;
      },
      error: (err) => {
        console.error('Erreur lors de la recup des données', err);
      }
    })
    }
  }


