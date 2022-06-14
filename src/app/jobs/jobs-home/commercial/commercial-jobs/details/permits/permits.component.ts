import { Component, OnInit, ViewChild } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.css']
})
export class PermitsComponent implements OnInit {
  @ViewChild('permitSelect', {static: false}) permitSelect: any;

  faCirclePlus = faCirclePlus;

  permits: any = [];
  permit = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: any) {
    this.permit = this.permitSelect.nativeElement.value;
    this.permits.push(this.permit)
  }

}
