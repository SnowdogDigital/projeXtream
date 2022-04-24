import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-daily-form-job',
  templateUrl: './daily-form-job.component.html',
  styleUrls: ['./daily-form-job.component.css']
})
export class DailyFormJobComponent implements OnInit {
  faCirclePlus = faCirclePlus;
  faImages = faImages;

  tasks = ['task1'];

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.tasks.push(`task${this.tasks.length + 1}`);
  }

  onClickPhoto() {
    console.log('need to select photo');
  }

}
