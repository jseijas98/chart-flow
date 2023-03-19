import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewApi, NewIntegration, NewLoadBalancer, NewPersistence, NewService,Element } from '../interfaces/new-add-element';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  constructor( private http:HttpClient) {}

  ngOnInit(): void {}

  selectedValue: string;

  newElement: Element[] = [
    { value: 'integration', viewValue: 'servicios de pic' },
    { value: 'persistence', viewValue: 'base de datos' },
    { value: 'service', viewValue: 'services' },
    { value: 'apis', viewValue: 'apis' },
    { value: 'loadbalancer', viewValue: 'load balancer' },
  ];
  Onselect(id: any) {
    console.log(id);
  }

  buttontoggle(algo: any) {
    return algo == undefined ? true : false;
  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
// **********************************PIC*********************************************
  pic:FormGroup = new FormGroup({
    testInterval: new FormControl('',[Validators.required, Validators.minLength(2)]),
    url: new FormControl('',[Validators.required, Validators.minLength(2)]),
    json: new FormControl('',[Validators.required, Validators.minLength(2)]),
    channel: new FormControl('',[Validators.required, Validators.minLength(2)]),
    description: new FormControl('',[Validators.nullValidator, Validators.minLength(2)])
  });

  onSubmit_pic(testInterval:any,url:any,json:any,channel:any,description:any){
    let pic:NewIntegration
    pic={
          testInterval:parseInt(testInterval),
          url:url,
          json:json,
          channel:channel,
          description:description}

          this.addNewElement(pic)
      console.log('submit',pic);
  }

//***********************************persistense or data bases***********************
  dataBase:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(2)]),
    sqlSentence:new FormControl('',[Validators.required, Validators.minLength(2)]),
    username:new FormControl('',[Validators.required, Validators.minLength(2)]),
    password:new FormControl('',[Validators.required, Validators.minLength(2)]),
    testInterval: new FormControl('',[Validators.required, Validators.minLength(2)]),
    url:new FormControl('',[Validators.required, Validators.minLength(2)]),
    dataBaseType:new FormControl('',[Validators.required, Validators.minLength(2)]),
    description:new FormControl('',[Validators.nullValidator, Validators.minLength(2)])
  });

  onSubmit_DB(name:any,sqlSentence:any,username:any,password:any,testInterval:any,url:any,dataBaseType:any,description:any){

    let DB:NewPersistence ={
        name:name,
        sqlSentence:sqlSentence,
        username:username,
        password:password,
        testInterval:testInterval,
        url:url,
        dataBaseType:dataBaseType,
        description:description
    }
    console.log('submit',DB);
  }
// ***********************************services***************************************
service:FormGroup = new FormGroup({
   testInterval:new FormControl('',[Validators.required, Validators.minLength(2)]),
  name:new FormControl('',[Validators.required, Validators.minLength(2)]),
  labelApp:new FormControl('',[Validators.required, Validators.minLength(2)]),
  namespace:new FormControl('',[Validators.required, Validators.minLength(2)]),
  url:new FormControl('',[Validators.required, Validators.minLength(2)]),
  description:new FormControl('',[Validators.nullValidator, Validators.minLength(2)])
});

onSubmit_service(testInterval:any,name:any,labelApp:any,namespace:any,url:any,description:any){

let service:NewService = {
  testInterval:testInterval,
  name:name,
  labelApp:labelApp,
  namespace:namespace,
  url:url,
  description:description
}
  console.log('submit',service);
}
// *************************************apis*****************************************
apis:FormGroup = new FormGroup({
labelApp:new FormControl('',[Validators.required, Validators.minLength(2)]),
namespace:new FormControl('',[Validators.required, Validators.minLength(2)]),
testInterval:new FormControl('',[Validators.required, Validators.minLength(2)]),
url:new FormControl('',[Validators.required, Validators.minLength(2)])
});
onSubmit_apis(labelApp:any,namespace:any,testInterval:any,url:any){

  let api:NewApi={
    labelApp:labelApp,
    namespace:namespace,
    testInterval:testInterval,
    url:url
  }
  console.log('submit',api);
}
// *******************************load balancer***************************************
loadBalancer:FormGroup = new FormGroup({
    testInterval:new FormControl('',[Validators.required, Validators.minLength(2)]),
    url:new FormControl('',[Validators.required, Validators.minLength(2)]),
    json:new FormControl('',[Validators.required, Validators.minLength(2)]),
    description:new FormControl('',[Validators.required, Validators.minLength(2)]),
  });
  onSubmit_laodBalancer(testInterval:any,url:any,json:any,description:any){
    let LB:NewLoadBalancer={
        testInterval:parseInt(testInterval),
        url:url,
        json:json,
        description:description
    }
    console.log('submit',LB);
  }

  addNewElement(element:Object){
    this.http.post('https://63f9f095897af748dcc5ff81.mockapi.io/ap1/apisjorge',element).subscribe({
      next: this.success.bind(this),
      error: this.error.bind(this),
    });
  }

  success(response:any){
    console.log(response);
  }
  error(error:any){
    console.log(error);

  }



}
