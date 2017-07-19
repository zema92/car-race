import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit,
  Output
} from '@angular/core';
import {Car} from "../../../model/car.model";
import * as $ from 'jquery';

@Component({
  selector: 'app-race-car',
  templateUrl: './race-car.component.html',
  styleUrls: ['./race-car.component.scss']
})
export class RaceCarComponent implements OnInit, AfterViewInit {

  @Input()
  public car: Car;

  @Input()
  public index: string;

  @Input()
  public raceStarted: boolean;

  @Input()
  public firstPlace: Car;

  @Input()
  public secondPlace: Car;

  @Input()
  public thirdPlace: Car;

  @Output()
  public emitAnimationEndTarget: EventEmitter<any> = new EventEmitter();

  public animationDuration: string;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.animationDuration = `${(1 / this.car.speed) * 3600}s`;
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

    // Reflect.getMetadata('annotations', RaceCarComponent)[0]
    //   .animations[0].definitions.forEach((animationDecorator) => {
    //   if (animationDecorator.hasOwnProperty('animation')) {
    //     animationDecorator.animation.timings = this.animationDuration;
    //     console.log(animationDecorator.animation.timings);
    //   }
    // });
  }

  ngAfterViewInit(): void {
    $('.car--race.1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      this.emitAnimationEndTarget.emit(event.target);
      });

    $('.car--race.2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      this.emitAnimationEndTarget.emit(event.target);
    });

    $('.car--race.3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      this.emitAnimationEndTarget.emit(event.target);
    });

    $('.car--race.4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      this.emitAnimationEndTarget.emit(event.target);
    });

    $('.car--race.5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      this.emitAnimationEndTarget.emit(event.target);
    });
  }
}
