import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendMail(){
    console.log("mail Sent")
  }

  message(){
    console.log("cursor is on the message")
  }
  
  message1(){
    console.log("cursor is out of the message")
  }
}
