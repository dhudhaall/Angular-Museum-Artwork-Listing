import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtWorkListComponent } from './art-work-list/art-work-list.component';

const routes: Routes = [
  {
    path:'',
    component:ArtWorkListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseumRoutingModule { }
