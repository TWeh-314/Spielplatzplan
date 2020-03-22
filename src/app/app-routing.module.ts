import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpielplatzListeComponent } from './spielplatz-liste/spielplatz-liste.component';
import { NeuerEintragComponent } from './neuer-eintrag/neuer-eintrag.component';

const routes: Routes = [
  { path: 'Liste',  component: SpielplatzListeComponent },
  { path: 'NeuerEintrag',  component: NeuerEintragComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
