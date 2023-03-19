import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FlowCharServicesService } from '../services/flow-char-service/flow-char-services.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-zone-chart',
  templateUrl: './zone-chart.component.html',
  styleUrls: ['./zone-chart.component.css'],
})
export class ZoneChartComponent implements AfterViewInit {
  @ViewChild('zoneFlowChart') zoneFlowChart: ElementRef = new ElementRef('');


  constructor(private flowChartService: FlowCharServicesService) {}



  ngOnInit(): void {
    this.algo();
    this.connect();
    // this.obser();
  }

  connect(): void {
    let source = new EventSource('http://localhost:8080/health');
    source.addEventListener('message', (message) => {
      this.myData = JSON.parse(message.data);
    });
  }

  myData: any;

  obser() {
    const observable = Observable.create(
      (observer: { next: (arg0: any) => any; error: (arg0: Event) => any }) => {
        const eventSource = new EventSource('http://localhost:8080/health');
        eventSource.onmessage = (x) => observer.next(x.data);
        eventSource.onerror = (x) => observer.error(x);
      }
    );
    observable.subscribe({
      next: this.success.bind(this),
      error: this.error.bind(this),
    });
  }

  success(response: any) {
    console.log(response);
  }

  error(err: any) {
    console.log(err);
  }

  colorSChema(data: any): string {
    let red =
      'invert(18%) sepia(74%) saturate(7163%) hue-rotate(2deg) brightness(98%) contrast(124%)';
    let yellow =
      'invert(80%) sepia(73%) saturate(331%) hue-rotate(5deg) brightness(100%) contrast(102%)';
    let green =
      'invert(48%) sepia(86%) saturate(368%) hue-rotate(84deg) brightness(95%) contrast(90%)';

    let datita = data;

    let response!: string;

    datita < 50
      ? (response = red)
      : datita < 90
      ? (response = yellow)
      : datita >= 90
      ? (response = green)
      : (datita = '');
    return response;
  }

  ngAfterViewInit(): void {
  }

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  algo() {
    this.flowChartService.setData();
  }

  view: any[] = [700, 300];

  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    }];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  object(): Object[] {
    const algo = [
      {
        name: 'grafiquita',
        series: [
          {
            value: '45',
            name: '2023-03-12T03:28:42.019',
          },
        ],
      },
    ];

    return algo;
  }

}
