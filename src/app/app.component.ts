import { Component } from '@angular/core';
import { Configuration } from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title;
  public description;

  constructor(){
    this.title = Configuration.title;
    this.description = Configuration.description;
  }


}
