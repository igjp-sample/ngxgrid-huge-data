import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor(private http: HttpClient) { }

  getData(count: number = 100000, col: number = 10): Observable<any[]> {
    return this.http.get<any[]>("https://www.igniteui.com/api/gridperformance?rowscount=" + count + "&databind=true&colscount=" + col)
    .pipe(map((res: any[]) => {
      return res['Records'];
    }));
  }
}
