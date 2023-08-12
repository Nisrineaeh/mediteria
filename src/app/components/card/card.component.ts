import { Component, Input, OnInit } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechSelectService } from 'src/app/services/tech-select.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() uneTechAAfficher!: TechniqueMeditation;

  constructor(private techS: TechSelectService) { }

  ngOnInit(): void { }

  OnTechSelected(uneTechAAfficher: TechniqueMeditation) {
    this.techS.setSelectedTech(uneTechAAfficher);
    console.log(this.uneTechAAfficher)
  }
}
