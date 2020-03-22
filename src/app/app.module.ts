import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpielplatzListeComponent } from './spielplatz-liste/spielplatz-liste.component';
import { NeuerEintragComponent } from './neuer-eintrag/neuer-eintrag.component';

@NgModule({
  declarations: [
    AppComponent,
    SpielplatzListeComponent,
    NeuerEintragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
