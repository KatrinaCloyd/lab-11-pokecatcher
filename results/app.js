import { getItemsFromStats, findById } from '../localStorageUtils.js';
import { renderLineItems, nameArray } from './resultsUtils.js';
import { pokemonData } from '../pokeData.js';

const POKESTATS = 'POKESTATS';
const table = document.getElementById('poke-results');
const itemArrayFromLS = getItemsFromStats();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { // eslint-disable-line
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Blah', 'BlahBlah', 'Blerg', 'UUuuugh'],
        datasets: [{
            label: '# of Catches',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            data: [2, 4, 5, 2]
        },
        {
            label: '# of Encounters',
            backgroundColor: 'rgba(80, 99, 132, 0.5)',
            borderColor: 'rgb(80, 99, 132)',
            borderWidth: 2,
            data: [2, 4, 5, 2]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

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
