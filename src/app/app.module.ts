import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowChartComponent } from './flow-chart/flow-chart.component';
import { ZoneChartComponent } from './zone-chart/zone-chart.component';
import { FlowChartNodeComponent } from './flow-chart-node/flow-chart-node.component';
import { LoginComponent } from './login/login.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlowChartComponent,
    ZoneChartComponent,
    FlowChartNodeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
