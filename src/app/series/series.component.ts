import { Component, OnInit } from '@angular/core';
import { SeriesApiService } from './serie/shared/series-api.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private SerieSvc: SeriesApiService) { }
  allSeries!: Observable<any>;

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(){
    this.allSeries = this.SerieSvc.getAllSeries();
  }
}
