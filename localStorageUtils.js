const POKESTATS = 'POKESTATS';

export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

export function setItemsToStats(stats) {
    localStorage.setItem(POKESTATS, JSON.stringify(stats));
}

export function getItemsFromStats() {
    let stringyStats = localStorage.getItem(POKESTATS);
    let parsedStats = JSON.parse(stringyStats);
    if (!parsedStats) {
        parsedStats = [];
        let stringifiedStats = JSON.stringify(parsedStats);
        localStorage.setItem(POKESTATS, stringifiedStats);
    }
    return parsedStats;
}

export function upSeenCount(id) {
    const pokeStats = getItemsFromStats();
    const selectedPoke = findById(id, pokeStats);
    if (!selectedPoke) {
        const newPokeInStats = {
            id: id,
            seen: 1,
            caught: 0,
        };
        pokeStats.push(newPokeInStats);
    } else {
        selectedPoke.seen++;
    }
    setItemsToStats(pokeStats);
}

export function upCaughtCount(id) {
    const pokeStats = getItemsFromStats();
    const selectedPoke = findById(id, pokeStats);
    selectedPoke.caught++;
    setItemsToStats(pokeStats);
}