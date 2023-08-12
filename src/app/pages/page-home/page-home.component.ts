import { Component, OnInit } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  TechToDisplay: TechniqueMeditation[] = [];

  constructor(private techService: TechniquesService){}

  ngOnInit(): void {
    this.techService.geteTechnique().subscribe((tech)=>{
      this.TechToDisplay = tech;
      console.log(this.TechToDisplay);
    })
  }

  

}
