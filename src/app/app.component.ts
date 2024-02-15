import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { CsvService } from './services/csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'data-analyzer';

  file: File | undefined;
  rawData: any[] | undefined;
  analytics: any[] | undefined;
  sampleSize: number = 10;
  uploaded: boolean = false;

  constructor(private csvService: CsvService) {}

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      this.uploaded = true;
    }
  }

  processCsv(): void {
    if (this.file) {
      this.csvService
        .parseCsv(this.file)
        .pipe(
          switchMap((data) => {
            this.rawData = data.slice(0, this.sampleSize);
            return this.csvService.processData({ dataset: this.rawData });
          })
        )
        .subscribe((res) => {
          this.analytics = res;
          console.log(this.analytics);
        });
    }
  }
}
