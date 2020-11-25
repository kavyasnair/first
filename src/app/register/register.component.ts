import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public com:CommunicateService) { }

  regdata(mydata){
    console.log(mydata)
    this.com.setdata(mydata);
  }

  ngOnInit(): void {
  }

}
