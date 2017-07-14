import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public cars = [];
  public searchResult = [];

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

  private pickCarForRace(event: any): void {
    console.log(event);
  }
}
