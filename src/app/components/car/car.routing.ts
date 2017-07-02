import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CarListComponent} from "app/components/car/car-list/car-list.component";

const routes: Routes = [
  { path: '', component: CarListComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
