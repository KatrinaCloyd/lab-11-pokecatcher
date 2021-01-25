/*
import pokemonData from './pokeData.js';


-function to set info to storage 
    -same as get by ID from ecom page 

-function to get info from storage 
    -same as get by ID from ecom page 

*/

export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}


