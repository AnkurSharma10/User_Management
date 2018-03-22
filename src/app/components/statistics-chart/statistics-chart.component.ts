import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartDataService } from '../../services/chart-data.service';

@Component({
  selector: 'app-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.css']
})
export class StatisticsChartComponent implements OnInit {
  chart: Chart;

  programmerAnalystCount = 0;
  designAnaylstCount = 0;
  qualityAnalystCount = 0;
  businessAnalystCount = 0;

  constructor(private chatDataService: ChartDataService) {
    this.chatDataService.designationsData.subscribe( data => {
      this.designAnaylstCount = data.designAnalystCount;
      this.qualityAnalystCount = data.qualityAnalystCount;
      this.programmerAnalystCount = data.programmerAnalystCount;
      this.businessAnalystCount = data.businessAnalystCount;
      this.createChart();
  });
  }

  ngOnInit() {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Designations Statistics'
      },
      series: [
        {
          name: 'Designations',
          data: [
            {
              name: 'Programmer Analyst',
              y: this.programmerAnalystCount
            },
            {
              name: 'Business Analyst',
              y: this.businessAnalystCount
            },
            {
              name: 'Quality Analyst',
              y: this.qualityAnalystCount
            },
            {
              name: 'Design Analyst',
              y: this.designAnaylstCount
            }
          ]
        }
      ]
    });
  }
}
