import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from "ng-chartist";

import { UIModule } from '../../shared/ui/ui.module';
import { ChartRoutingModule } from './chart-routing.module';

import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { EchartComponent } from './echart/echart.component';

@NgModule({
  declarations: [ApexComponent, ChartjsComponent,
     ChartistComponent, 
     EchartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    UIModule,
    NgApexchartsModule,
    NgChartsModule,
    ChartistModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ]
})
export class ChartModule { }
