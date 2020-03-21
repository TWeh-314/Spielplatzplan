import { Component, OnInit } from '@angular/core';
import { Spielplatz } from './../shared/spielplatz';

@Component({
  selector: 'app-spielplatz-liste',
  templateUrl: './spielplatz-liste.component.html',
  styleUrls: ['./spielplatz-liste.component.scss']
})
export class SpielplatzListeComponent implements OnInit {
  spielplaetze: Spielplatz[];

  constructor() { }

  ngOnInit() {

    this.spielplaetze = [
      {
        name: 'Spielplatz im Stadtwald',
        beschreibung: 'Riesen Spielplatz mit vielen Angeboten',
        coords: '51.3469843,6.5936669,14z',
        link: 'https://spielplatznet.de/spielplatz/10509/Krefeld/Stadtwald'
      },
      {
        name: 'Spielplatz Burg Linn',
        beschreibung: 'Große Burganlage aus Holz mit 3 Rutschen. Die Fläche ist komplett mit Sand bedeckt',
        coords: '51.332626,6.6342291,17z',
        link: 'https://www.spielplatztreff.de/spielplatz/burg-linn-in-krefeld_4691'
      },
      {
        name: 'Spielplatz Glindholzstraße',
        beschreibung: 'Weitläufiger Spielplatz mit 2 Schaukeln, 2 Tischtennisplatten, Bagger, Kletterbaum und Rutsche. Wenig Sand.',
        coords: '51.3346703,6.6169091,15z',
        link: 'https://www.spielplatztreff.de/spielplatz/burg-linn-in-krefeld_4691'
      }
    ]
  }

}
