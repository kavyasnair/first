import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

  constructor() { }

  private message={
    name:"",
    email:"",
    age:"",


  };
  setdata(x){
    console.log(x)
    this.message=x;
  }

  passdata(){
    let message=this.message;
    console.log(message,'from get call')
    return message;
  }
}
