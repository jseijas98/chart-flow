import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidFlowChartComponent } from './mermaid-flow-chart.component';

describe('MermaidFlowChartComponent', () => {
  let component: MermaidFlowChartComponent;
  let fixture: ComponentFixture<MermaidFlowChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MermaidFlowChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MermaidFlowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
