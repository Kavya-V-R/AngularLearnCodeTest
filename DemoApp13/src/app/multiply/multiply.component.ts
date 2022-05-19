import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  constructor(public cs:CalculatorService) { }

  ngOnInit() {
  }

  execute(a,b){
    this.cs.number1=a;
    this.cs.number2=b;
    let result=this.cs.multiplyNumbers();
    alert(result)
  }
}
