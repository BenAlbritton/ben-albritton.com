import { Component, OnInit } from '@angular/core';
//import { dropdown } from "./headerFunctions"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent implements OnInit {

  static newFunction(): any {
    throw new Error("Method not implemented.");
  }
  constructor() { }
    //welcome = "Welcome to Ben-Albritton.com"
  ngOnInit() {
  }

  //newFunction(); 

}
function newFunction() {
  function dropdown(): null {
    return null;
  }
}

