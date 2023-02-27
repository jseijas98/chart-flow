import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GraphComponent, Layout, Graph, Edge } from '@swimlane/ngx-graph';
import { FlowCharServicesService } from '../services/flow-char-service/flow-char-services.service';
import * as shape from 'd3-shape';
import { stepRound } from '../services/flow-char-service/stepRound';

@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowChartComponent implements OnInit {
  @ViewChild('myChart')
  child!: GraphComponent;
  dimensions: [number, number] = [0, 0];
  showRender: boolean = false;
  dataNode: Array<any> = []; //TODO--> tarjetas
  dataLink: Array<any> = []; //TODO: ---> lineas verdes

  constructor(
    private serv: FlowCharServicesService,
    private cd: ChangeDetectorRef
  ) {}

  curve = stepRound;

  public layoutSettings = {
    orientation: 'LR', //TODO: Top-to-bottom  --> Left to Right
  };

  ngOnInit(): void {
    this.serv.zoneDimensions$.subscribe(([w, h]) => {
      if (w && h) {
        if (w && h) {
          this.dimensions = [w, h];
          this.showRender = true;

          console.log(this.dimensions);

          this.cd.detectChanges();
          this.callAfterLoad();
        }
      }
    });

    this.serv.data$.subscribe((data) => {
      if (data) {
        this.dataNode = [...this.dataNode, ...data.nodes];
        this.dataLink = [...this.dataLink, ...data.links];
        console.log('data:', data);
      }
    });
  }

  callAfterLoad(): void {
    /* Recalculate Positions of endpoints while moving / dragging, added i as an identifier that it was moved */

    // tslint:disable-next-line:only-arrow-functions
    (this.child.layout as Layout).updateEdge = function (
      graph: Graph,
      edge: Edge
    ): Graph {
      const sourceNode: any = graph.nodes.find((n) => n.id === edge.source);
      const targetNode: any = graph.nodes.find((n) => n.id === edge.target);

      // centered so i do not bother if its up oder downwards bot -1
      const dir = sourceNode.position.y <= targetNode.position.y ? -1 : -1;
      // Compute positions while dragging here
      const startingPoint = {
        x: sourceNode.position.x - dir * (sourceNode.dimension.height / 2) - 10,
        i: true,
        y: sourceNode.position.y,
      };
      const endingPoint = {
        x:
          targetNode.position.x - dir * (targetNode.dimension.height / 2) - 150,
        i: true,
        y: targetNode.position.y,
      };

      edge.points = [startingPoint, endingPoint];
      console.log([startingPoint, endingPoint]);

      return graph;
    };
  }
}
