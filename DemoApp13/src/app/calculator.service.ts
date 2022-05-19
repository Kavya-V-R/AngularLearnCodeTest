import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(

  ) { }

  public number1;
  public number2;

  addNumbers() {
    return parseInt(this.number1) + parseInt(this.number2);
  }
  subtractNumbers() {
    return parseInt(this.number1) - parseInt(this.number2);
  }
  multiplyNumbers() {
    return parseInt(this.number1) * parseInt(this.number2);
  }
  divideNumbers() {
    return parseInt(this.number1) / parseInt(this.number2);
  }
}
