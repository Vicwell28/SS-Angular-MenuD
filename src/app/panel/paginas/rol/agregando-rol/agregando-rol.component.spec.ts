import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregandoRolComponent } from './agregando-rol.component';

describe('AgregandoRolComponent', () => {
  let component: AgregandoRolComponent;
  let fixture: ComponentFixture<AgregandoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregandoRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregandoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
