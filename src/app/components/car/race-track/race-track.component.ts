import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../../model/car.model";
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-race-track',
  templateUrl: './race-track.component.html',
  styleUrls: ['./race-track.component.scss']
})
export class CarTrackComponent implements OnInit {

  @Input()
  public carsForRace: Array<Car>;

  @Output()
  public carForRemoval: EventEmitter<Car> = new EventEmitter();

  @Output()
  public emitRaceStarted: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public emitResetRace: EventEmitter<boolean> = new EventEmitter();

  public hoveredRow: number;
  public car: Car;
  public openConfirmation = false;
  public confirmationMessage: string;
  public isOpen: boolean;
  public firstPlace: Car;
  public secondPlace: Car;
  public thirdPlace: Car;
  public raceStarted = false;
  public state = 'inactive';
  public carsFinished = new Map();

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

  private startRace(carsForRace: Array<Car>): void {
    this.raceStarted = true;
    this.state = 'active';
    this.emitRaceStarted.emit(this.raceStarted);
  }

  private resetRace(): void {
    this.raceStarted = false;
    this.state = 'inactive';
    this.emitResetRace.emit(true);
    this.carsFinished.clear();
    this.firstPlace = null;
    this.secondPlace = null;
    this.thirdPlace = null;
  }

  private finishRace(event): void {
    this.carsForRace.forEach((carForRace) => {
      if (carForRace.id === +event.classList[1]) {
        this.carsFinished.set(carForRace.id, carForRace);
      }
    });

    const places = this.carsFinished.values();
    this.firstPlace = places.next().value;
    this.secondPlace = places.next().value;
    this.thirdPlace = places.next().value;
  }
}
