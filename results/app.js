import { getItemsFromStats, findById } from '../localStorageUtils.js';
import { renderLineItems } from './resultsUtils.js';
import { pokemonData } from '../pokeData.js';

const POKESTATS = 'POKESTATS';
const table = document.getElementById('poke-results');
const itemArrayFromLS = getItemsFromStats();

for (let poke of itemArrayFromLS) {
    const newTableRow = renderLineItems(poke, findById(poke.id, pokemonData));
    table.append(newTableRow);
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    const defaultStats = [];
    const strDefaultStats = JSON.stringify(defaultStats);
    localStorage.setItem(POKESTATS, strDefaultStats);
    location.href = '../index.html';
});