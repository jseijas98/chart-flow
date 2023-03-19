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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ModalComponent } from './modal/modal.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    FlowChartComponent,
    ZoneChartComponent,
    FlowChartNodeComponent,
    LoginComponent,
    ModalComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
