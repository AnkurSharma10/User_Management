import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-stackedbarchart',
  templateUrl: './stackedbarchart.component.html',
  styleUrls: ['./stackedbarchart.component.css']
})
export class StackedbarchartComponent implements OnInit {

  chart: Chart;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Project completion chart'
      },
      xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May']
      },
      yAxis: {
        title: {
          text: 'Project completion count'
        },
        allowDecimals: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'iMtecho',
        data: [1, null, null, null, null]
      }, {
        name: 'opTEMS',
        data: [null, 1, null, null, null]
      }, {
        name: 'erooBroo',
        data: [1, null, null, null, null]
      }, {
        name: 'mHealth',
        data: [null, null, 1, null, null]
      }, {
        name: 'Business Modeller',
        data: [null, null, null, 1, null]
      }, {
        name: 'TriageTRACE',
        data: [null, null, null, null, 1]
      }]
    });
  }

}
