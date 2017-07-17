import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrackComponent } from './car-track.component';

describe('CarTrackComponent', () => {
  let component: CarTrackComponent;
  let fixture: ComponentFixture<CarTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
