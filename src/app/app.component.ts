import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quickstart';

  gridData = [
    { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
    { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
    { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
    { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 }
  ];
}
