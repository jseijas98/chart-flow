import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FlowCharServicesService } from '../services/flow-char-service/flow-char-services.service';

@Component({
  selector: 'app-zone-chart',
  templateUrl: './zone-chart.component.html',
  styleUrls: ['./zone-chart.component.css'],
})
export class ZoneChartComponent implements AfterViewInit {
  @ViewChild('zoneFlowChart') zoneFlowChart: ElementRef = new ElementRef('');

  constructor(private flowChartService: FlowCharServicesService) {}

  ngOnInit(): void {
    this.flowChartService.getalgo()
  }

  ngAfterViewInit(): void {
    const el = this.zoneFlowChart.nativeElement;
    this.flowChartService.calculateDimensions(el);
    console.log(el);
  }

  algo() {
    this.flowChartService.setData('application');

  }
}
