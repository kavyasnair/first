import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public com: CommunicateService) { }
  
  user= {
    name:"",
    email:"",
    age:"",
  };
  lst=[{name:"kavya",email:"cs@.com",age:"23"},{name:"kavya",email:"cs@.com",age:"23"}];
  ngOnInit(){
    
    
    this.user= this.com.passdata();
    this.lst.push(this.user);

  }
  
    
  

}
