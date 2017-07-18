import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Car} from "../../../model/car.model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-race-car',
  templateUrl: './race-car.component.html',
  styleUrls: ['./race-car.component.scss'],
  animations: [
    trigger('raceState', [
      state('inactive',   style({
        transform: 'scaleX(-1) translateX(0)'
      })),
      state('active',   style({
        transform: 'scaleX(-1) translateX(-1410px)'
      })),
      transition('inactive => active', animate(`0.2s ease-in`))
    ])
  ]
})
export class RaceCarComponent implements OnInit {

  @Input()
  public car: Car;

  @Input()
  public index: number;

  @Input()
  public state;

  @Input()
  public firstPlace: Car;

  @Input()
  public secondPlace: Car;

  @Input()
  public thirdPlace: Car;

  @Output()
  public emitCarFinished: EventEmitter<Car> = new EventEmitter();

  public animationDuration: string;

  constructor() { }

  ngOnInit() {
    this.animationDuration = `${(5 / this.car.speed) * 3600}s ease-in`;
    // console.log(this.animationDuration);

    // const bla = {
    //   expr: 'inactive => active',
    //   options: null,
    //   type: 1,
    //   animation: {
    //     styles: null,
    //     type: 4,
    //     timings: '2s ease-in'
    //   }
    // };

    // const result = Reflect.getMetadata('annotations', RaceCarComponent)[0]
    //   .animations[0].definitions;

    // console.log(result);
    // result.push(bla);
    // Reflect.defineMetadata('annotations', 'stagod', RaceCarComponent);
    // console.log(Reflect.getMetadata('annotations', RaceCarComponent));
    // console.log(result);

    Reflect.getMetadata('annotations', RaceCarComponent)[0]
      .animations[0].definitions.forEach((animationDecorator) => {
      if (animationDecorator.hasOwnProperty('animation')) {
        animationDecorator.animation.timings = this.animationDuration;
        console.log(animationDecorator.animation.timings);
      }
    });
  }

  private raceFinished(event: any): void {
    if (event.toState === 'active') {
      this.emitCarFinished.emit(this.car);
    }
  }

}
