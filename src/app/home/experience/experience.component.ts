import { Component, OnInit } from '@angular/core';
import { EXPS } from './exp_items';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['../../app.component.css']
})
export class ExperienceComponent implements OnInit {

  exps = EXPS;
  constructor() { }

  ngOnInit() {
  }

}
