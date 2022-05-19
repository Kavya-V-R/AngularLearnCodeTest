import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ss: LoanService) { }
  public loanForm = new FormGroup({
    loanId: new FormControl(),
    loanCustomerName: new FormControl(),
    loanAmount: new FormControl(0),
    dateOfLoan: new FormControl(),
    tensure: new FormControl(),
    rateOfInterest: new FormControl(0),
  });
  ngOnInit() {
  }

  add() {
    console.log(this.loanForm.value);
    this.ss.addLoan(this.loanForm.value);
  }

}
