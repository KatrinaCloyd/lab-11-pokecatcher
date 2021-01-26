import { getItemsFromStats, findById } from '../localStorageUtils.js';
import { renderLineItems, nameArray, seenArray, caughtArray, imgArray } from './resultsUtils.js';
import { pokemonData } from '../pokeData.js';

const POKESTATS = 'POKESTATS';
const table = document.getElementById('poke-results');
const itemArrayFromLS = getItemsFromStats();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { // eslint-disable-line
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: nameArray(itemArrayFromLS, pokemonData),
        datasets: [{
            label: '# of Catches',
            backgroundColor: 'rgba(252, 207, 0, 0.5)',
            borderColor: 'rgb(252, 207, 0)',
            borderWidth: 2,
            data: caughtArray(itemArrayFromLS)
        },
        {
            label: '# of Encounters',
            backgroundColor: 'rgba(36, 104, 177, 0.5)',
            borderColor: 'rgb(36, 104, 177)',
            borderWidth: 2,
            data: seenArray(itemArrayFromLS)
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
