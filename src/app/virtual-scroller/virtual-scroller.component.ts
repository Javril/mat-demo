import { Component, OnInit } from '@angular/core';
import { Car, SelectItem, LazyLoadEvent } from '../ICar';

// import {Car} from '../components/domain/car';



@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.scss']
})
export class VirtualScrollerComponent implements OnInit {

    cars: Car[] = [];
    lazyCars: Car[];
    brands: string[];
    colors: string[];
    totalLazyCarsLength: number;
    timeout: any;
    sortKey: string;
    sortOptions: SelectItem[];

    constructor() { }

    ngOnInit() {
        this.brands = [
            'Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'
        ];

        this.colors = [
            'Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'
        ];

        for (let i = 0; i < 10000; i++) {
            this.cars.push(this.generateCar());
        }

        this.totalLazyCarsLength = 10000;

        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'}
        ];
    }

    generateCar(): Car {
        return {
            vin: this.generateVin(),
            brand: this.generateBrand(),
            color: this.generateColor(),
            year: this.generateYear()
        };
    }

    generateVin() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateBrand() {
        return this.brands[Math.floor(Math.random() * Math.floor(10))];
    }

    generateColor() {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    }

    generateYear() {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    }

    loadCarsLazy(event: LazyLoadEvent) {

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.lazyCars = [];
            if (this.cars) {
                this.lazyCars = this.cars.slice(event.first, (event.first + event.rows));
            }
        }, 1000);
    }

    onSortChange() {
      if (this.sortKey.indexOf('!') === 0) {
        this.sort(-1);
      } else {
        this.sort(1);
      }
    }

    sort(order: number): void {
        const cars = [...this.cars];
        cars.sort((data1, data2) => {
          const value1 = data1.year;
          const value2 = data2.year;
          const result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

          return (order * result);
        });

        this.cars = cars;
    }

}
