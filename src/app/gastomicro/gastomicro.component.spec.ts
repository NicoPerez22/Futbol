import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastomicroComponent } from './gastomicro.component';

describe('GastomicroComponent', () => {
  let component: GastomicroComponent;
  let fixture: ComponentFixture<GastomicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastomicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastomicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
