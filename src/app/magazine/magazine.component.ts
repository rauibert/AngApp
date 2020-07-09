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

  public new_user: any;
  public saved_user: any;

  constructor(
    private _requestsService: RequestsService
  ) { 
    this.userId = 1;
    this.new_user = {
      'name':'',
      'job':''
    };
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

  onSubmit(form){
    this._requestsService.addUser(this.new_user).subscribe(
      response =>{
        console.log(response);
        this.saved_user = response;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
