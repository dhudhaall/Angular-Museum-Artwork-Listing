import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'museum',
        pathMatch: 'full',
  },
  {
    path: 'museum',
    loadChildren: () => import('./museum/museum.module').then(m => m.MuseumModule),
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
