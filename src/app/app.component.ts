import { Component } from '@angular/core';
import { faBusinessTime, faChartLine, faEarthAmericas, faList, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjeXtream';
  faBusinessTime = faBusinessTime;
  faChartLine = faChartLine;
  faEarthAmericas = faEarthAmericas;
  faList = faList;
  faLock = faLock;
  faUser = faUser;
}
