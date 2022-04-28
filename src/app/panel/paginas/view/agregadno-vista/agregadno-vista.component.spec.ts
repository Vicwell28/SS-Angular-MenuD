import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregadnoVistaComponent } from './agregadno-vista.component';

describe('AgregadnoVistaComponent', () => {
  let component: AgregadnoVistaComponent;
  let fixture: ComponentFixture<AgregadnoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregadnoVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregadnoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
