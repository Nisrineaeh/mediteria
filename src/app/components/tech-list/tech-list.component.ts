import { Component } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent {
  techniques: TechniqueMeditation[] = [];

  constructor(private techniqueMed: TechniquesService) { }

  ngOnInit() {
    this.techniqueMed.getMyTechniques().subscribe(data => {
      this.techniques = data;
    });
  }
}