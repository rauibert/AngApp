import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'biblio',
    templateUrl: './biblio.component.html'
})

export class BiblioComponent implements OnInit{
    public book: string;
    public titleBiblio: string;
    public list: string;

    constructor(
        private _route: ActivatedRoute,
        private router: Router
    ){
       this.titleBiblio = 'Test Angular';

    }

    ngOnInit(): void {
        this._route.paramMap.subscribe(params =>{
            this.book = params.get('book');
        })

        //console.log('Loading component Biblio');
    }

    redirect(){
        this.router.navigate(['/comics']);
    }

}