import { Component } from '@angular/core';

@Component({
    selector: 'biblio',
    template: `
        <h2> Test Angular </h2>
    `


})

export class BiblioComponent {
    
    constructor(){
        console.log('Loading component');
    };
    
    
}