import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrosmedicosComponent } from './arbitrosmedicos.component';

describe('ArbitrosmedicosComponent', () => {
  let component: ArbitrosmedicosComponent;
  let fixture: ComponentFixture<ArbitrosmedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitrosmedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitrosmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
