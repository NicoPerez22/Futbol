import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonosutilesComponent } from './telefonosutiles.component';

describe('TelefonosutilesComponent', () => {
  let component: TelefonosutilesComponent;
  let fixture: ComponentFixture<TelefonosutilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonosutilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonosutilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
