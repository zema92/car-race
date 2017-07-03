import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public cars = [];

  constructor (private carService: CarService) { }

  ngOnInit() {
    this.carService.cars.subscribe((cars) => {
      this.cars = cars;
    });
    this.carService.getAllCars();
  }
}
