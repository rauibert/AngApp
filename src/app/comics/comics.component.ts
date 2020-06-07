import { Component, OnInit } from '@angular/core';
import { Comic } from '../models/comic';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public comics: Array<Comic>;
  public comicsTitle: string[];
  public newTitle: string;

  constructor() {
    this.comicsTitle = new Array();
    this.comics = [
      new Comic('Spiderman Vuelta a casa','Straczynski', 'Romita Jr.', 2001, true),
      new Comic ('Hasta que las estrellas se congelen','Straczynski', 'Romita Jr.', 2001, true),
      new Comic ('Spiderman 2020','Straczynski', 'Romita Jr.', 2020, true)
    ];
  }

  ngOnInit(): void {
    console.log(this.comics);
    this.getTitle();
  }

  getTitle(){
    this.comics.forEach((comic, index) => {
      this.comicsTitle.push(comic.title);
      
    });
    console.log(this.comicsTitle);
  }

  addTitle(){
    this.comicsTitle.push(this.newTitle);
  }

  removeTitle(index){
    //delete this.comics[index];
    this.comics.splice(index, 1);
  }


}
