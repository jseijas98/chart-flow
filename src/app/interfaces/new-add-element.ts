export interface NewApi {
  labelApp: string;
  namespace: string;
  testInterval: number;
  url: string;
}

export interface NewIntegration {
  testInterval: number;
  url: string;
  json: string;
  channel: string;
  description: string;
}

export interface NewLoadBalancer {
  testInterval: number;
  url: string;
  json: string;
  description: string;
}

export interface NewPersistence {
  name: string;
  sqlSentence: string;
  username: string;
  password: string;
  testInterval: number;
  url: string;
  dataBaseType: string;
  description: string;
}

export interface NewService {
  testInterval:number;
  name:string;
  labelApp:string;
  namespace:string;
  url:string;
  description:string;
}

export interface Element {
  value: string;
  viewValue: string;
}

