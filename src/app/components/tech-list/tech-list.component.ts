import { Component, Input, OnInit } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';


@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {
  @Input() techniqueRecupDeMyTech!: TechniqueMeditation[];

  constructor() { }

  ngOnInit(): void {

  }
}