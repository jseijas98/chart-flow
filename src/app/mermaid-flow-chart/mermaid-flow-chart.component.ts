import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import mermaid from 'mermaid';



@Component({
  selector: 'app-mermaid-flow-chart',
  templateUrl: './mermaid-flow-chart.component.html',
  styleUrls: ['./mermaid-flow-chart.component.css'],
})
export class MermaidFlowChartComponent implements OnInit,AfterViewInit {
  flowChart: any;
  stringFlowChart: any = '';

  constructor() {
    this.createFlowchart();
  }
  ngAfterViewInit(): void {
    mermaid.initialize(this.config)

    throw new Error('Method not implemented.');
  }

  @ViewChild('mermaidDiv')
  mermaidDiv: ElementRef;

  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }




  config = {
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'stepBefore',
    },
    securityLevel: 'loose',
 };




  createFlowchart() {
    this.flowChart = [
      'graph LR',
      'id1[LOAD BALANCER] ---> id2[APIS]',
      'id2 ---> id3[MICRO SERVICES]',
      'id3 ---> id4[BASES DE DATOS]   &   id5[PIC]',
    ];
    this.stringFlowChart = this.flowChart.join('\n');
  }
}
