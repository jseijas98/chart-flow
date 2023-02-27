import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlowCharServicesService {
  public zoneDimensions$: BehaviorSubject<[number, number]> =
    new BehaviorSubject([0, 0]);
  public data$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  //calculate dimenson zone of flow chart

  calculateDimensions(el: HTMLElement): void {
    const { width, height } = el.getBoundingClientRect();
    this.zoneDimensions$.next([width - 5, height - 8]);
    console.log(width, height);
  }

  color: string = 'red';

  baseUrl = 'https://63f9f095897af748dcc5ff81.mockapi.io/ap1/e';

  getalgo() {
    let salud;
    this.http.get<any>(this.baseUrl).subscribe(res => {
      salud=res.name_app;

      console.log('data', salud);
    });
  }

  setData(source: string): void {
    //TODO: Aqui podemos hacer un llamado a API HTTP!
    const httpMock: any = {
      application: {
        nodes: [
          {
            id: 'c1',
            label: 'C1',
            data: {
              title: 'LOAD BALANCER',
              img: '../../../assets/server-svgrepo-com (5).svg',
              text:
                '<font ' +
                'color=' +
                this.color +
                '>' +
                'LOAD BALANCER 50%</font>',
              link: 'https://swimlane.github.io/ngx-graph/#outputs',
              msg: 'mesaje sin definir load balancer',
            },
          },
          {
            id: 'c2',
            label: 'C2',
            data: {
              title: 'APIS',
              img: 'https://www.svgrepo.com/show/100036/server.svg',
              text: '<font ' + 'color=' + this.color + '>' + 'APIS </font>',
              msg: 'mesaje sin definir apis',
            },
          },
          {
            id: 'c3',
            label: 'C3',
            data: {
              title: 'MICROSERVICES',
              img: 'https://www.svgrepo.com/show/100036/server.svg',
              text: '<font ' + 'color=' + this.color + '>' + 'SERVICIOS</font>',
              msg: 'mesaje sin definir services',
            },
          },
          {
            id: 'c4',
            label: 'C4',
            data: {
              title: 'BASES DE DATOS',
              img: 'https://www.svgrepo.com/show/100036/server.svg',
              text:
                '<font ' +
                'color=' +
                this.color +
                '>' +
                'BASES DE DATOS </font>',
              msg: 'mesaje sin definir bases de datos',
            },
          },
          {
            id: 'c5',
            label: 'C5',
            data: {
              title: 'MICROSERVICES',
              img: 'https://www.svgrepo.com/show/100036/server.svg',
              text: '<font ' + 'color=' + this.color + '>' + 'PIC </font>',
              msg: 'mesaje sin definir pic',
            },
          },
        ],
        links: [
          {
            id: 'a',
            source: 'c1',
            target: 'c2',
            label: 'is parent of',
          },
          {
            id: 'b',
            source: 'c2',
            target: 'c3',
            label: 'custom label',
          },
          {
            id: 'd',
            source: 'c3',
            target: 'c4',
            label: 'custom label',
          },
          {
            id: 'e',
            source: 'c3',
            target: 'c5',
            label: 'first link',
          },
        ],
      },
    };
    this.data$.next(httpMock[source]);
  }
}
