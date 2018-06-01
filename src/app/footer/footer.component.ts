import { Component, OnInit } from '@angular/core';
import { Feet } from "./feet";
import { FEETS } from "./feet_Items";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../app.component.css']
})
export class FooterComponent implements OnInit {

  feets = FEETS;

  constructor() { 

  }

  ngOnInit() {
  }

}
