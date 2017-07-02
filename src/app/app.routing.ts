import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './components/car/car.module#CarModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
