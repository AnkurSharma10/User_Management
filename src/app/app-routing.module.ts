import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserFormComponent } from './components/user-form/user-form.component';
import { StatisticsChartComponent } from './components/statistics-chart/statistics-chart.component';
import { StackedbarchartComponent } from './components/stackedbarchart/stackedbarchart.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'editUser/:id', component: UserFormComponent },
  { path: 'stackedbargraph', component: StackedbarchartComponent },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
