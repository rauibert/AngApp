import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css'],
  providers: [RequestsService]
})
export class MagazineComponent implements OnInit {

  public user: any;
  public userId: number;
  public dateData: any;

  constructor(
    private _requestsService: RequestsService
  ) { 
    this.userId = 1;
  }

  ngOnInit(): void {
      this.dateData = new Date();
      this.loadUser();
  }

  loadUser(){
    this._requestsService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
