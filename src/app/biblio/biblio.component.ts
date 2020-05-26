import { Component } from '@angular/core';

@Component({
    selector: 'biblio',
    templateUrl: './biblio.component.html'


})

export class BiblioComponent {
    
    public titleBiblio: string;
    public list: string;

    constructor(){
        this.titleBiblio = 'Test Angular';
        
        console.log('Loading component Biblio');
    };
    
    
}