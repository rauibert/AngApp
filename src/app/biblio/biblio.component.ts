import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'biblio',
    templateUrl: './biblio.component.html'
})

export class BiblioComponent implements OnInit{
    
    public titleBiblio: string;
    public list: string;

    constructor(
        private _route: ActivatedRoute
    ){
       this.titleBiblio = 'Test Angular';
        
    }

    ngOnInit(): void {
        this._route.paramMap.subscribe(params =>{
            console.log(params.get('book'));
        })        

        //console.log('Loading component Biblio');
    }
    
    
}