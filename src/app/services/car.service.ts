import {Http, Headers, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Subject} from "rxjs/Subject";
import {Car} from "../model/car.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CarService {
  public cars: Subject<Car[]> = new Subject();

  constructor(private http: Http) {}

  public getAllCars(): void {
    this.http.get('http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4', { headers: this.generateHeaders() })
      .map((response: Response) => {
        return (<any>response.json().data).map(car => {
          return new Car(car);
        });
      })
      .subscribe(data => this.cars.next(data));
  }

  private generateHeaders(): Headers {
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');

    return contentHeaders;
  }
}
