import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Poke App</h1>
    <ul>
        <li *ngFor="let pokemon of pokemons">
            <p>{{pokemon.name}}</p>
            <img [(src)]="pokemon.img" />
        </li>
    </ul>
    <p *ngIf="pokemons.length">
        There are {{pokemons.length}} pokemon.
    </p>
    `
})
export class AppComponent { 
    
    name = 'My first angular 2 app';
    
    pokemons = 
        [
            {id : 10 , name:'Pikachu', type : 'electric', img :'http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035'},
            {id : 1 , name:'bulbasaur', type : 'grass', img :'http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'}
        
        ];
}
