import { Component, ElementRef, ViewChild } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {

  techniques!: TechniqueMeditation[];
  message: any[] = [];

  constructor(private techniquesService: TechniquesService) { }

  ngOnInit() {
    // Chargez les techniques de méditation lors de l'initialisation du composant
    this.loadMeditationTechniques();
    const messageStocke = localStorage.getItem('messages');
    if (messageStocke) {
      this.message = JSON.parse(messageStocke);
    }
  }

  loadMeditationTechniques() {

    this.techniquesService.geteTechnique().subscribe((technique) => {
      this.techniques = technique;
      console.log(this.techniques)
    })
  }

  lieuxOptions: string[] = ['', 'Domicile', 'Travail', 'Extérieur'];
  nombreOptions: string[] = ['', 'Seul', 'En groupe'];

  @ViewChild('messageInput', { static: true }) messageInput!: ElementRef;
  selectedTechnique: string = '';
  selectedLieu: string = '';
  selectedNombre: string = '';

  addMessage(techniqueValue: string, lieuValue: string, nombreValue: string): void {
    const message = this.messageInput.nativeElement.value
    if (message.trim() !== '') {
      const newMessage = {
        technique: techniqueValue,
        lieu: lieuValue,
        nombre: nombreValue,
        message: message
      };
      this.message.push(newMessage);
      this.messageInput.nativeElement.value = '';
      console.log(this.messageInput);

      localStorage.setItem('messages', JSON.stringify(this.message));
    }


  }

  getTechName(techniqueId: number): string {
    const selectedTechnique = this.techniques.find((technique) => Number(technique.id) === techniqueId);
    return selectedTechnique ? selectedTechnique.name : '';
  }



  chronometerHours: number = 0;

}
