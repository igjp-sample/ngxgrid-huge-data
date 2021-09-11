import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DummyDataService } from './dummy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxgrid-huge-data';
  public data: Observable<any[]>;
  constructor(private localService: DummyDataService) {
    this.data = this.localService.getData(10000,10); //行、列数を引数をして渡してください。
  }
}
