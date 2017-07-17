import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../model/car.model";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  @Input()
  public car: Car;

  @Input()
  public raceStarted: boolean;

  @Output()
  picked: EventEmitter<any> = new EventEmitter();

  public hover = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.hover = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.hover = false;
  }

  private emitCar(car: Car): void {
    this.picked.emit(car);
  }
}
