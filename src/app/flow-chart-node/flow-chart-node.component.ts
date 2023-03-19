import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowCharServicesService } from '../services/flow-char-service/flow-char-services.service';

@Component({
  selector: 'app-flow-chart-node',
  templateUrl: './flow-chart-node.component.html',
  styleUrls: ['./flow-chart-node.component.css'],
})
export class FlowChartNodeComponent implements OnInit {
  @Input() dataIn: any;

  constructor(private serv: FlowCharServicesService, private router: Router) {}

  ngOnInit(): void {}



  alguito(algo: any) {
    this.router.navigateByUrl(algo);
    console.log(algo);
  }
}
