import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { StatisticService } from '../services/statistic.service';
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  pieChartLabels:string[];
  pieChartData:number[];
  pieChartType:string = 'pie';
  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  isLoading= false

  chartColors: Array<any> = [
      { 
        backgroundColor: []
      }
  ]

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.isLoading= !this.isLoading
    this.statisticService.getCollections().subscribe((data) => {
      this.isLoading= !this.isLoading
      let formatedData = this.statisticService.buildData(data.collections.edges)
      this.pieChartData = formatedData.chartData
      this.pieChartLabels = formatedData.chartLabel
      this.chartColors[0].backgroundColor = formatedData.chartColor
      return data
    })
  }
}
