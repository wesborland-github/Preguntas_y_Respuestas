import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoBienvenidaComponent } from './saludo-bienvenida.component';

describe('SaludoBienvenidaComponent', () => {
  let component: SaludoBienvenidaComponent;
  let fixture: ComponentFixture<SaludoBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoBienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludoBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
