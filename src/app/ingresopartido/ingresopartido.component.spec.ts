import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresopartidoComponent } from './ingresopartido.component';

describe('IngresopartidoComponent', () => {
  let component: IngresopartidoComponent;
  let fixture: ComponentFixture<IngresopartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresopartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresopartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
