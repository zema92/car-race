import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Car} from "../../../model/car.model";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public cars = [];
  public searchResult = [];
  public carsForRaceMap = new Map();
  public carsForRace = [];

  constructor (private carService: CarService) { }

  ngOnInit() {
    this.carService.cars.subscribe((cars) => {
      this.cars = cars;
      this.searchResult = this.cars;
    });
    this.carService.getAllCars();
  }

  private filterCars(query: string): void {
    this.searchResult = [];

    this.cars.forEach((car) => {
      if (car.name.startsWith(query) || car.name.toLowerCase().startsWith(query)) {
        this.searchResult.push(car);
      }
    });
  }

  private pickCarForRace(event: Car): void {
    this.carsForRaceMap.set(event.id, event);
    this.covertMapToArray();
  }

  private removeCar(car: Car): void {
    this.carsForRaceMap.delete(car.id);
    this.covertMapToArray();
  }

  private covertMapToArray(): void {
    this.carsForRace = [];

    this.carsForRaceMap.forEach((carForRaceMap) => {
      this.carsForRace.push(carForRaceMap);
    });
  }
}
