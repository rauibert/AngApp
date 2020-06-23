import { Component, OnInit } from '@angular/core';
import { Comic } from '../models/comic';
import { ComicService } from '../services/comic.service';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [ComicService]
})
export class ComicsComponent implements OnInit {

  public comics: Array<Comic>;
  public comicsTitle: string[];
  public newTitle: string;

  constructor(
    private _comicService: ComicService
  ) {
    this.comics = this._comicService.getComics();
    this.comicsTitle = new Array();
    
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
