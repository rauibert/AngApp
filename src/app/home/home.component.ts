import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public flag: boolean;

  constructor() { 
    this.flag = false;
  }

  ngOnInit(): void {
  }

  setFlag(){
    this.flag = true;
  }

}
