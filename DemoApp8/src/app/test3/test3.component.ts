import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }
  public names = ['kavya', 'Mamtha', 'Venu', 'Dini'];
  public technologies = ["Angular", "Hibernate", "SpringBoot"];

  public employees = [
    {
      "id": 100,
      "name": "Kavya",
      "salary": 10000.00,
      skills: ["MySQL", "C++", "Spring", "SpringBoot"]
    },
    {
      "id": 101,
      "name": "Mamtha",
      "salary": 20000.00,
      skills: ["JS", "Python", "Angular", "HTML"]
    },
    {
      "id": 102,
      "name": "Venu",
      "salary": 30000.00,
      skills: ["CSS", "Hibernate", "Spring", "MySQL"]
    }
  ];

  ngOnInit() {
  }

}
