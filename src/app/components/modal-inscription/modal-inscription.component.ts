import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-inscription',
  templateUrl: './modal-inscription.component.html',
  styleUrls: ['./modal-inscription.component.css']
})
export class ModalInscriptionComponent {
  constructor(public bsModalRef: BsModalRef,
              private router: Router) { }

  onClose():void{
    this.bsModalRef.hide();
    this.router.navigate(['/connexion']);
  }
}
