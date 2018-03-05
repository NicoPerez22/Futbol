import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosgeneralesComponent } from './gastosgenerales.component';

describe('GastosgeneralesComponent', () => {
  let component: GastosgeneralesComponent;
  let fixture: ComponentFixture<GastosgeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosgeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
