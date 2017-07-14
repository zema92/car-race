import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../model/car.model";
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-car-track',
  templateUrl: './car-track.component.html',
  styleUrls: ['./car-track.component.scss']
})
export class CarTrackComponent implements OnInit {

  @Input()
  public carsForRace: Array<Car>;

  @Output()
  public carForRemoval: EventEmitter<Car> = new EventEmitter();

  public hoveredRow: number;
  public car: Car;
  public openConfirmation = false;
  public confirmationMessage: string;
  public isOpen: boolean;

  constructor (private carService: CarService) { }

  ngOnInit() {
  }

  private showButton(index: number): void {
    this.hoveredRow = index;
  }

  private hideButton(): void {
    this.hoveredRow = null;
  }

  private openConfirmationModal(car: Car) {
    this.car = car;
    this.openConfirmation = true;
    this.confirmationMessage = `Are you sure you want to remove ${car.name} from race?`
  }

  private closeModal(): void {
    this.isOpen = false;
    this.carService.getAllCars();
  }

  private emitCarForRemoval(isConfirmed: boolean): void {
    if (isConfirmed) {
      this.carForRemoval.emit(this.car);
    }

    this.openConfirmation = false;
  }
}