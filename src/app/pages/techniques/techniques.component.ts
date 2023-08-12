import { Component, OnInit } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.css']
})
export class TechniquesComponent implements OnInit {

  techniqueToDisplay: TechniqueMeditation[] = [];

  constructor(private techService: TechniquesService) { }

  ngOnInit(): void {
    this.techService.geteTechnique().subscribe((techniques) => {
      this.techniqueToDisplay = techniques;
      console.log(this.techniqueToDisplay);
    })
  }

}
