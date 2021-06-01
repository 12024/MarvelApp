import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {

  PUBLIC_KEY = '2065617d2b1e55f342886158bc84b69d';
  HASH = '173c05ccf53225abc95ef03bddd116a6';
  URL_API = `https://gateway.marvel.com/v1/public/series?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllSeries () : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}
