import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/mockdata.service';
import { UserService } from './services/user.service';
import { ChartDataService } from './services/chart-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RouterOutlet } from '@angular/router';
import { PaginationModule, AlertModule, ModalModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { StatisticsChartComponent } from './components/statistics-chart/statistics-chart.component';
import { StackedbarchartComponent } from './components/stackedbarchart/stackedbarchart.component';

@NgModule({
  declarations: [AppComponent, UserComponent, UserFormComponent, StatisticsChartComponent, StackedbarchartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    })
  ],
  providers: [UserService, ChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
