import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  constructor(public cs:CalculatorService) { }

  ngOnInit() {
  }

  execute(a,b){
    this.cs.number1=a;
    this.cs.number2=b;
    let result=this.cs.divideNumbers();
    alert(result)
  }
}
