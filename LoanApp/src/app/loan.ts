export class Loan {
    constructor(
        public loanId: number,
        public loanCustomerName: string,
        public loanAmount: number,
        public dateOfLoan: Date,
        public tensure: number,
        public rateOfInterest: number
    ) {
    }

    computeInterestAmount() {
        //Interest=loan amount*rate of interest*tensure(number of months)
        let interest = this.loanAmount * (this.rateOfInterest / 100) * (this.tensure);
        return interest;
    }

    computeEMI() {
        //EMI=[p*(r/100)*{1+(r/100)}^n]/[{1+(r/100)}^(n-1)]
        //p=loan amount
        //r=rate of interest
        //n=tenure (number of months)
        let emi: number;
        let r = this.rateOfInterest / 100;
        let numerator = [this.loanAmount * (this.rateOfInterest / 100) * (1 + r) ^ this.tensure];
        let denominator = [(1 + r) ^ (this.tensure - 1)];
        emi = Number(numerator) / Number(denominator);
        return emi;
    }
}
