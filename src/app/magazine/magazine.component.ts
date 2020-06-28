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

  constructor(
    private _requestsService: RequestsService
  ) { }

  ngOnInit(): void {
      this._requestsService.getUser().subscribe(
        result =>{
          this.user = result.data;
        },
        error =>{
          console.log(error);
        }
      );
  }

}
