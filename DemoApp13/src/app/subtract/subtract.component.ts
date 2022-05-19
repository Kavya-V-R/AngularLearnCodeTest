import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {

  constructor(public cs:CalculatorService) { }

  ngOnInit() {
  }

  execute(a,b){
    this.cs.number1=a;
    this.cs.number2=b;
    let result=this.cs.subtractNumbers();
    alert(result)
  }

}
