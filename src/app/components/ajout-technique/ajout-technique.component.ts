import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';
import { TechniquesService } from 'src/app/services/techniques.service';

@Component({
  selector: 'app-ajout-technique',
  templateUrl: './ajout-technique.component.html',
  styleUrls: ['./ajout-technique.component.css']
})
export class AjoutTechniqueComponent implements OnInit {
  technique!: TechniqueMeditation;
  techniqueForm!: FormGroup;
  motsClefsInput: string = "";

  constructor(private meditationService: TechniquesService,
    private formBuilder: FormBuilder,){}

    ngOnInit(): void {
      this.techniqueForm = this.formBuilder.group({
        name: ['', Validators.required],
        ambiance: ['', Validators.required],
        description: ['', Validators.required],
        duration: ['', [Validators.required]],
        images:[''],
        audio:[''],
        mot_clefs: ['[]']
        
      });
    }
    
    
    ajouterTechnique(){
      if (this.techniqueForm.valid) {
        // Création de l'objet technique à partir des valeurs du formulaire
        const technique: TechniqueMeditation = {
         
          ...this.techniqueForm.value,
          mot_clefs: this.techniqueForm.value.mot_clefs.split(',').map((mot: string) => mot.trim()) // Convertir la chaîne en tableau
        };

        this.meditationService.addTechnique(technique).subscribe({
          next: (response) => {
            console.log('Technique ajoutée !', response);
            this.techniqueForm.reset();
            // Vous pouvez aussi rediriger vers une autre page ou montrer un message
          },
          error: (error) => {
            console.error('Erreur lors de l\'ajout de la technique', error);
          }
        });
    
      }

  
}
}
