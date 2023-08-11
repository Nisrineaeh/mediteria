import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// import { AuthServiceService } from 'src/app/services/auth-service.service';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm!: FormGroup;
  // private authService: AuthServiceService
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
  }

  private initialForm(): void {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required]]
    });
  }



  async onSubmit() {
//     if (this.connexionForm.valid) {
//       const email = this.connexionForm.value.email;
//       const motDePasse = this.connexionForm.value.mdp;

//       try {
//         const user = await this.authService.validateUser(email, motDePasse);
//         if (user) {
//           const token = await this.authService.generateToken(user);
//           if (token) {
//             // Token généré avec succès, vous pouvez rediriger l'utilisateur ou effectuer d'autres actions
//             console.log('Connexion réussie ! Token:', token);
//           } else {
//             console.error('La génération du token a échoué.');
//           }
//         } else {
//           console.error('Identifiants incorrects.');
//         }
//       } catch (error) {
//         console.error('Erreur lors de la validation de l\'utilisateur :', error);
//       }
//   }
// }





}
}