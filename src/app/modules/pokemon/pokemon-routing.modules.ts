import { PokemonlistComponent } from './pokemonlist.component';
import { PokemondetailComponent } from './pokemondetail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const pokemonRoutes: Routes=[
    {path:'pokemon', component: PokemonlistComponent},
    {path:'pokemon/:id', component: PokemondetailComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(pokemonRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class PokemonRoutingModule { }