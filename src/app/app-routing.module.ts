import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpielplatzListeComponent } from './spielplatz-liste/spielplatz-liste.component';

const routes: Routes = [
  { path: 'Liste',  component: SpielplatzListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
