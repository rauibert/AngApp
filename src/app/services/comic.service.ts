import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';

@Injectable()
export class ComicService{

    public comics: Array<Comic>;

    constructor(){
        this.comics = [
            new Comic('Spiderman Vuelta a casa','Straczynski', 'Romita Jr.', 2001, true),
            new Comic ('Hasta que las estrellas se congelen','Straczynski', 'Romita Jr.', 2001, false),
            new Comic ('Spiderman 2020','Straczynski', 'Romita Jr.', 2020, true)
          ];
    }

    getComics(): Array<Comic>{
        return this.comics;
    }
}