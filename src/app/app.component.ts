import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   barchart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'barchart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'BarLine 1',
        data: [1, 2, 3],
        type:undefined

      }
    ]
  });

  linechart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type:undefined

      }
    ]
  });

  // add point to chart serie
  add() {
    this.linechart.addPoint(Math.floor(Math.random() * 10));
        this.barchart.addPoint(Math.floor(Math.random() * 10));

  }
}
