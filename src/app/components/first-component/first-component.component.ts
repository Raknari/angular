import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Gustavo';
  age: number = 10;
  job = 'Crianca';
  hobbie = ['lapis', 'borracha', 'sei la'];
  naosei = {
    gustavo: 'lapis',
    matheus: 'borracha',
    melissa: 'aaaa'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
