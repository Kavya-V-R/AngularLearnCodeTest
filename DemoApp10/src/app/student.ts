export class Student {
    constructor(
        public rollNo: number,
        public name: string,
        public marks1: number,
        public marks2: number,
        public marks3: number,

    ) {

    }

    computeTotal(){
        return this.marks1+this.marks2+this.marks3;
    }
}


