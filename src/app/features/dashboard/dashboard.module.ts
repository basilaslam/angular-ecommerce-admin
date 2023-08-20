import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import {  showMainChartComponent } from './componrnts/smart/chart/main-chart.component';
import { NewProductsChartComponent } from './componrnts/smart/new-products-chart/new-products-chart.component';
import { UsersChartComponent } from './componrnts/smart/users-chart/users-chart.component';
import { AudienceByAgeChartComponent } from './componrnts/smart/audience-by-age-chart/audience-by-age-chart.component';
import { LatestTransactionsComponent } from './componrnts/smart/latest-transactions/latest-transactions.component';
import { LatestProductsComponent } from './componrnts/smart/latest-products/latest-products.component';


@NgModule({
  declarations: [
    DashboardComponent,
    showMainChartComponent,
    NewProductsChartComponent,
    UsersChartComponent,
    AudienceByAgeChartComponent,
    LatestTransactionsComponent,
    LatestProductsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
  ]
})
export class DashboardModule { }
