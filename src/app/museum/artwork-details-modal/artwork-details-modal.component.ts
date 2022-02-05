import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ArtWork } from 'src/app/shared/Models/object.model';

@Component({
  selector: 'app-artwork-details-modal',
  templateUrl: './artwork-details-modal.component.html',
  styleUrls: ['./artwork-details-modal.component.scss']
})
export class ArtworkDetailsModalComponent implements OnInit {

  modalData:ArtWork |undefined;
  constructor(public modalRef:BsModalRef) { }

  ngOnInit(): void {
    console.log("modalData", this.modalData)
  }

}
