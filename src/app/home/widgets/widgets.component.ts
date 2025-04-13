import { Component } from '@angular/core';
import * as Highchart from 'highcharts';


import {ChartOptions} from '../../constants/highchartWidget.constant';

import More from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import * as Highcharts from 'highcharts';
More(Highchart);
SolidGauge(Highchart);


@Component({
  selector: 'app-widgets',
  imports: [],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {

  public chart : any;
  public chart2 : any;

  ngOnInit(){
    this.createColumnChart()
    this.createGaugeChart()

  }

  createColumnChart(){
    this.chart = Highcharts.chart('columnChart',ChartOptions.columnChartOptions)
  }

  createGaugeChart(){
    this.chart2 = Highcharts.chart('guageChart',ChartOptions.gaugeChartOptions)
  }

}
