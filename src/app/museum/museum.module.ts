import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuseumRoutingModule } from './museum-routing.module';
import { ArtWorkListComponent } from './art-work-list/art-work-list.component';
import { SharedModule } from '../shared/shared.module';
import { ArtworkDetailsModalComponent } from './artwork-details-modal/artwork-details-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ArtWorkListComponent,
    ArtworkDetailsModalComponent
  ],
  imports: [
    CommonModule,
    MuseumRoutingModule,SharedModule,ModalModule.forRoot()
  ]
})
export class MuseumModule { }
