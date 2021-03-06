import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarListComponent} from './car-list/car-list.component';
import {routing} from './car.routing';
import {CarService} from "../../services/car.service";
import { CarSearchComponent } from './car-search/car-search.component';
import { CarItemComponent } from './car-item/car-item.component';
import {ConfirmationComponent} from "../confirmation-modal/confirmation.component";
import {CarTrackComponent} from "./race-track/race-track.component";
import { RaceCarComponent } from './race-car/race-car.component';
// import 'reflect-metadata';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    CarListComponent,
    CarSearchComponent,
    CarItemComponent,
    ConfirmationComponent,
    CarTrackComponent,
    RaceCarComponent
  ],
  providers: [CarService]
})
export class CarModule { }
