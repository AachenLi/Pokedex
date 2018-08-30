import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { PokemonlistComponent } from './pokemonlist.component';
import { PokemondetailComponent } from './pokemondetail.component';
import { PokemonRoutingModule } from './pokemon-routing.modules';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations:[
        PokemondetailComponent,
        PokemonlistComponent
    ],
    providers:[]
})
export class PokemonModule {}