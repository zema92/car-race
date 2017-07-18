import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCarComponent } from './race-car.component';

describe('RaceCarComponent', () => {
  let component: RaceCarComponent;
  let fixture: ComponentFixture<RaceCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
