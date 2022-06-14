import { Component, Input, OnInit } from '@angular/core';
import {  faFilePdf, faSquareMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-permit-info',
  templateUrl: './permit-info.component.html',
  styleUrls: ['./permit-info.component.css']
})
export class PermitInfoComponent implements OnInit {
  @Input() permit = '';

  faFilePdf = faFilePdf;
  faSquareMinus = faSquareMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
