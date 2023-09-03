import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalInscriptionComponent } from 'src/app/components/modal-inscription/modal-inscription.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private utilisateurService: UtilisateursService,
    public modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(8)]],
      date: new Date(),

    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      this.utilisateurService.inscription(formData).subscribe({
        next: (newUtilisateur) => {
          console.log('Utilisateur enregistré avec succès :', newUtilisateur);
        },
        error: (error) => {
          console.error('Erreur lors de l\'inscription :', error);
        }
      });
    } else {
      console.error('Formulaire invalide. Veuillez corriger les erreurs.');
    }
  }

  openModal() {
    this.modalService.show(ModalInscriptionComponent, {
      class: 'modal-dialog-centered',
      initialState: {
        //pr passer des donnees inital a la fenetre
      }
    });
  }



}
