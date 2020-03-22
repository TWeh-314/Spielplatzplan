import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Spielplatz } from './../shared/spielplatz';

@Component({
  selector: 'app-neuer-eintrag',
  templateUrl: './neuer-eintrag.component.html',
  styleUrls: ['./neuer-eintrag.component.scss']
})
export class NeuerEintragComponent {

  @Output() created = new EventEmitter<Spielplatz>();

  eintragForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    beschreibung: new FormControl('', Validators.required),
    link: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.eintragForm.get(name);
    return control.invalid && control.dirty;
  }

  submitForm() {
    const neuerEintrag = {
      ...this.eintragForm.value,
      rating: 1
    };

    this.created.emit(neuerEintrag);
    this.eintragForm.reset();
  }
}
