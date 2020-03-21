import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielplatzListeComponent } from './spielplatz-liste.component';

describe('SpielplatzListeComponent', () => {
  let component: SpielplatzListeComponent;
  let fixture: ComponentFixture<SpielplatzListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielplatzListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielplatzListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
