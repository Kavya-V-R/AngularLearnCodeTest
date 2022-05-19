import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public cs:CalculatorService) { }

  ngOnInit() {
  }

  execute(a,b){
    this.cs.number1=a;
    this.cs.number2=b;
    let result=this.cs.addNumbers();
    alert(result)
  }
}
