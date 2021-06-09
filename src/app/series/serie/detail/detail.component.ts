import { SeriesApiService } from './../shared/series-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';
import { details } from '../shared/interfaces/details.interface';
import { Location} from '@angular/common'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() serie!: details;

  constructor(
    private router: ActivatedRoute,
    public location: Location,
    public serieSvc: SeriesApiService) { }

  ngOnInit(): void {
    this.router.params.subscribe(routeParams =>(
      this.getAllDetail(routeParams.details)
    ));
  }
  public getAllDetail(id:number){
    this.serieSvc.getDetail(id)
    .pipe(
      take(1)
    )
    .subscribe(
      res =>{
        this.serie =res;
        console.log(this.serie);
      },
      err =>{
        console.log(err);
      },
      ()=>{
      });
  }
}
