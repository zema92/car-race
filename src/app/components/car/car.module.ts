import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarListComponent} from './car-list/car-list.component';
import {routing} from './car.routing';
import {CarService} from "../../services/car.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CarListComponent],
  providers: [CarService]
})
export class CarModule { }
