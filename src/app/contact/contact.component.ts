import { Component, OnInit } from '@angular/core';
import { UserContact } from '../models/userContact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public userContact: UserContact;

  constructor() { 
    this.userContact = new UserContact('','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submit done");
    console.log(this.userContact);
  }

}
