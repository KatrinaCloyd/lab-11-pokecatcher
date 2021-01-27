import { getItemsFromStats, findById } from '../localStorageUtils.js';
import { renderLineItems, nameArray, seenArray, caughtArray, typeOfCaughtArray } from './resultsUtils.js';
import { pokemonData } from '../pokeData.js';

const POKESTATS = 'POKESTATS';
const table = document.getElementById('poke-results');
const itemArrayFromLS = getItemsFromStats();
const caughtItemsArray = caughtArray(itemArrayFromLS);

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { // eslint-disable-line
    type: 'horizontalBar',

    data: {
        labels: nameArray(itemArrayFromLS, pokemonData),
        datasets: [{
            label: '# of Catches',
            backgroundColor: 'rgba(252, 207, 0, 0.5)',
            borderColor: 'rgb(252, 207, 0)',
            borderWidth: 2,
            data: caughtItemsArray
        },
        {
            label: '# of Encounters',
            backgroundColor: 'rgba(36, 104, 177, 0.5)',
            borderColor: 'rgb(36, 104, 177)',
            borderWidth: 2,
            data: seenArray(itemArrayFromLS)
        }]
    },

    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});

var abc = document.getElementById('myPiChart').getContext('2d');
var myDoughnutChart = new Chart(abc, { // eslint-disable-line
    type: 'doughnut',
    data: {
        datasets: [{
            data: [2, 4, 1, 1, 2], //need to use type of counter function here
            backgroundColor: [
                '#fecd00',
                '#ffe047',
                '#0a89ff',
                '#005fcc',
                '#00378f',
            ]
        }],
        labels: typeOfCaughtArray(itemArrayFromLS, pokemonData),
        options: {
            cutoutPercentage: 50,
        },
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
console.log(typeOfCaughtArray(itemArrayFromLS, pokemonData));
