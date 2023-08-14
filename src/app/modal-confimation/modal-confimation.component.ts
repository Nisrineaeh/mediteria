import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal-confimation',
  templateUrl: './modal-confimation.component.html',
  styleUrls: ['./modal-confimation.component.css']
})
export class ModalConfimationComponent {

  constructor(public modalRef: BsModalRef, private router: Router){}



  onConfirm(){
    
    this.router.navigate(['/profil']);
    this.modalRef.hide(); ///fermer la fenetre
  }

}
