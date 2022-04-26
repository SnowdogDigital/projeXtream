import { Component, Input, OnInit } from '@angular/core';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aspect',
  templateUrl: './aspect.component.html',
  styleUrls: ['./aspect.component.css']
})
export class AspectComponent implements OnInit {
  @Input() aspect = '';

  faSquareMinus = faSquareMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
