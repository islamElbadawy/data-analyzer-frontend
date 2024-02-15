// src/app/csv.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  constructor(private papa: Papa, private http: HttpClient) {}

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

  processData(data: any): Observable<any> {
    return this.http.post(
      'https://islamelbadawy.pythonanywhere.com/api/data/',
      data
    );
  }
}
