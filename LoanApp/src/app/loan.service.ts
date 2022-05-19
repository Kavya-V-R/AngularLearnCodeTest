import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  public loans = [];

  addLoan(loan) {
    this.loans.push(loan);
    console.log(this.loans);
  }

  getAllLoans() {
    return this.loans
  }


  removeLoan(loanId) {
    for (let i = 0; i < this.loans.length; i++) {
      if (this.loans[i].loanId == loanId) {
        this.loans.splice(i, 1);
      }
    }
  }}
