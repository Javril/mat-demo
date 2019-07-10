import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car, LazyLoadEvent } from '../ICar';

@Directive({
  selector: '[appLazyload]'
})
export class LazyloadDirective {

  carList: Car[];

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  @HostListener('onLazyLoad', ['$event'])
  mouseover(event: LazyLoadEvent) {
    // const eventInitial = {
    //   filters: {},
    //   first: 0,
    //   globalFilter: null,
    //   multiSortMeta: undefined,
    //   rows: 40,
    //   sortField: undefined,
    //   sortOrder: 1
    // };
    // event = event === undefined ? eventInitial : event;
    // console.log(event);
    // this.carService.loadDataOnScroll(event);
  }

  // @HostListener('mouseenter') mouseover(event: LazyLoadEvent) {
  //   console.log('OK');
  //   console.log(event);
  //   // const eventInitial = {
  //   //   filters: {},
  //   //   first: 0,
  //   //   globalFilter: null,
  //   //   multiSortMeta: undefined,
  //   //   rows: 40,
  //   //   sortField: undefined,
  //   //   sortOrder: 1
  //   // };
  //   // event = event === undefined ? eventInitial : event;
  //   // this.carService.loadDataOnScroll(event);
  // }

}
