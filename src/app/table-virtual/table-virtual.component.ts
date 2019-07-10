import { Component, OnInit, ViewChild, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Car, LazyLoadEvent } from '../ICar';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-virtual',
  templateUrl: './table-virtual.component.html',
  styleUrls: ['./table-virtual.component.scss']
})
export class TableVirtualComponent implements OnInit, AfterViewInit, DoCheck, OnChanges {

  cars1: Car[];
  cars2: Car[];
  cars3: Car[];
  cars4: Car[];
  cars5: Car[];
  carList: Car[];
  virtualCars: Car[];
  totalRecords: number;
  cols: any[];
  frozenCars: Car[];
  frozenCols: any[];
  scrollableCols: any[];
  sales: any[];
  loading: boolean;
  inmemoryData: Car[];
  @ViewChild('pTableId') pTableRef: Table;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngAfterViewInit() {
      const table = this.pTableRef.el.nativeElement.querySelector('table');
      // table.setAttribute('id', 'myTableId');
      table.addEventListener('onLazyLoad', this.loadDataOnScroll.bind(this, '$event'));
  }

  ngDoCheck() {
    console.log('DoCheck');
    // const table = this.pTableRef.el.nativeElement.querySelector('table');
    // table.addEventListener('onLazyLoad', this.loadDataOnScroll.bind(this, '$event'));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  ngOnInit() {

      // const event = {
      //   filters: {},
      //   first: 0,
      //   globalFilter: null,
      //   multiSortMeta: undefined,
      //   rows: 40,
      //   sortField: undefined,
      //   sortOrder: 1
      // };

      this.carService.getCarsMedium().then(cars => this.cars1 = cars);
      this.carService.getCarsSmall().then(cars => this.cars2 = cars);
      this.carService.getCarsMedium().then(cars => this.cars3 = cars);
      this.carService.getCarsMedium().then(cars => this.cars4 = cars);
      this.carService.getCarsMedium().then(cars => this.cars5 = cars);

      this.route.data.subscribe(data => {
        this.carList = data.cars.data;
        console.log(this.carList);
        // this.initLoad(event);
      });

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];

      this.totalRecords = 250000;
      this.loading = true;
  }

  // async initLoad(event: LazyLoadEvent) {
  //   this.loading = true;
  //   this.virtualCars = await this.loadChunk(event.first, event.rows);
  //   this.loading = false;
  // }

  async loadDataOnScroll(event: LazyLoadEvent) {
    this.loading = true;

    console.log(event);
    console.log('event.first: ', event.first);

    // setTimeout(() => {
    if (event.first === 249980) {
      this.virtualCars = await this.loadChunk(event.first, 20);
    } else {
      this.virtualCars = await this.loadChunk(event.first, event.rows);
    }
    this.loading = false;
    // }, 250);
  }

  loadChunk(index, length): Car[] {
      const chunk: Car[] = [];
      for (let i = 0; i < length; i++) {
        chunk[i] = {...this.carList[i], ...{vin: (index + i)}};
      }
      return chunk;
  }

}
