import { Component } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechSelectService } from 'src/app/services/tech-select.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  monUnivers: TechniqueMeditation[]=[];

  constructor(private techService: TechSelectService){
    this.monUnivers = this.techService.getSelectedTech();
  }

}
