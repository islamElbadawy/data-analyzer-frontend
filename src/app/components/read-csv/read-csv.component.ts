import { Component } from '@angular/core';
import { CsvService } from '../../services/csv.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrl: './read-csv.component.css',
})
export class ReadCsvComponent {
  file: File | undefined;
  data: any[] | undefined;

  constructor(private csvService: CsvService) {}

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  processCsv(): void {
    if (this.file) {
      this.csvService
        .parseCsv(this.file)
        .pipe(
          switchMap((data) => {
            return this.csvService.processData({ dataset: data });
          })
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
