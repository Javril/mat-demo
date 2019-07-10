import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Car } from '../ICar';
import { CarService } from '../services/car.service';
import { Observable, of  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TableDataResolver implements Resolve<Car[]> {
    constructor(
        private carService: CarService
    ) {}

    resolve(): Observable<Car[]> {
        return this.carService.getCars().pipe(
            catchError(error => {
                console.log('Error: ', error);
                return of(null);
            })
        );
    }
}
