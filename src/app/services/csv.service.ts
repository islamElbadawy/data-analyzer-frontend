// src/app/csv.service.ts
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  constructor(private papa: Papa) {}

  parseCsv(file: File): Observable<any> {
    return new Observable((observer) => {
      this.papa.parse(file, {
        complete: (result) => {
          observer.next(result.data);
          observer.complete();
        },
        header: true,
      });
    });
  }
}
