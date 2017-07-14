import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarListComponent} from './car-list/car-list.component';
import {routing} from './car.routing';
import {CarService} from "../../services/car.service";
import { CarSearchComponent } from './car-search/car-search.component';
import { CarItemComponent } from './car-item/car-item.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CarListComponent, CarSearchComponent, CarItemComponent],
  providers: [CarService]
})
export class CarModule { }
