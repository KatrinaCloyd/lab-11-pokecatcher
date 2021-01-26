import { getItemsFromStats, findById } from '../localStorageUtils.js';
import { renderLineItems } from './resultsUtils.js';
import { pokemonData } from '../pokeData.js';

const table = document.getElementById('poke-results');

const itemArrayFromLS = getItemsFromStats();

for (let poke of itemArrayFromLS) {
    const newTableRow = renderLineItems(poke, findById(poke.id, pokemonData));
    table.append(newTableRow);
}
