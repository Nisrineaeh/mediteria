import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { Router} from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalConfimationComponent } from 'src/app/modal-confimation/modal-confimation.component';

import { take } from 'rxjs';

// import { AuthServiceService } from 'src/app/services/auth-service.service';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm!: FormGroup;
  public erreurChamp: any ={};

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private modalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.initialForm();
  }

  private initialForm(): void {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log('Tentative de connexion');

    if (this.connexionForm.valid) {
      const email = this.connexionForm.value.email;
      const motDePasse = this.connexionForm.value.mdp;

      this.authService.login(email, motDePasse).subscribe({
        
        next: (response: any) => {
          console.log('Réponse complète du serveur :', response)
          if (response && response.access_token) {
            // Stocker le token dans le localStorage
            localStorage.setItem('access_token', response.access_token);
            console.log('Connexion réussie et token stocké!');
            this.showConfirmationModal();
          } else {
            console.error('Token non reçu dans la réponse.');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la connexion:', error);
          // if (error.status === 400 && error.error.errors) { 
          //   this.erreurChamp = error.error.errors;
          // }
        }
      });
    }
  }

  private showConfirmationModal(): void{
    const modalRef: BsModalRef = this.modalService.show(ModalConfimationComponent);
    if (modalRef.onHide) {
      modalRef.onHide.pipe(take(1)).subscribe(() => {
        this.router.navigate(['/profil']);
      });
    }
  }

  // get email(){
  //   const control = this.connexionForm.get('email');
  //   return control ? control : new FormControl();
  // }

  // get mdp(){
  //   const control = this.connexionForm.get('mdp')
  //   return control ? control : new FormControl();
  // }

 
}


