import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
printText(v){
  console.log(v)
}

printPara(ptext){
  console.log(ptext)
}

printPara1(p){
  console.log(p.innerText)
}

printTable(id){
  console.log(id.innerText)
}
}
