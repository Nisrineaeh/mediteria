import { Injectable } from '@angular/core';
import { TechniqueMeditation } from '../models/technique-meditation';

@Injectable({
  providedIn: 'root'
})
export class TechSelectService {
  private selectedTech: TechniqueMeditation[] = [];

  getSelectedTech(): TechniqueMeditation[] {
    return this.selectedTech;
  }
  setSelectedTech(tech: TechniqueMeditation) {
    this.selectedTech.push(tech);
  }
}
