import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car, LazyLoadEvent } from '../ICar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  loading = false;
  virtualCars: Car[];
  totalRecords: number;
  cols: any[];
  frozenCars: Car[];
  frozenCols: any[];
  scrollableCols: any[];
  carList: Car[];

  constructor(private http: HttpClient) { }

  async getCarsSmall() {
    return await this.http.get<any>('/assets/showcase/data/cars-small.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
    }

  async getCarsMedium() {
    return await this.http.get<any>('/assets/showcase/data/cars-medium.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
    }

  async getCarsLarge() {
    return await this.http.get<any>('/assets/showcase/data/cars-large.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
    }

  async getCarsHuge() {
    return await this.http.get<any>('/assets/showcase/data/cars-huge.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('/assets/showcase/data/cars-huge.json');
  }

  loadDataOnScroll(event: LazyLoadEvent) {
    this.loading = true;

    console.log(event);

    setTimeout(() => {
      if (event.first === 249980) {
        this.virtualCars = this.loadChunk(event.first, 20);
      } else {
        this.virtualCars = this.loadChunk(event.first, event.rows);
      }
      this.loading = false;
    }, 250);
  }

  loadChunk(index, length): Car[] {
    const chunk: Car[] = [];
    this.getCars().subscribe(res => {
      this.carList = res;
      for (let i = 0; i < length; i++) {
          chunk[i] = {...this.carList[i], ...{vin: (index + i)}};
      }
    });

    return chunk;
  }

}
