import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignandoVistasComponent } from './asignando-vistas.component';

describe('AsignandoVistasComponent', () => {
  let component: AsignandoVistasComponent;
  let fixture: ComponentFixture<AsignandoVistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignandoVistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignandoVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
