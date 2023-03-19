import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ZoneChartComponent } from './zone-chart/zone-chart.component';

const routes: Routes = [
  {path: 'home', component: LoginComponent},
  {path: 'flow', component: ZoneChartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
