import { pokemonData } from './pokeData.js';
import { upSeenCount, upCaughtCount } from './localStorageUtils.js';

// initialize state

// set event listeners to update state and DOM

export function randomPoke() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonData[randomIndex];
}

export function renderPokeImage(pokeItem) {
    const image = document.createElement('img');
    image.src = pokeItem.url_image;
    image.classList.add('pokeImg');
    image.addEventListener('click', () => {
        upCaughtCount(pokeItem.id);
    });
    return image;
}

export function generateThreePoke() {
    let pokeOne = randomPoke();
    let pokeTwo = randomPoke();
    let pokeThree = randomPoke();

    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
        pokeOne = randomPoke();
        pokeTwo = randomPoke();
        pokeThree = randomPoke();
    }

    upSeenCount(pokeOne.id);
    upSeenCount(pokeTwo.id);
    upSeenCount(pokeThree.id);

    const pokeImg1 = renderPokeImage(pokeOne);
    const pokeImg2 = renderPokeImage(pokeTwo);
    const pokeImg3 = renderPokeImage(pokeThree);

    const div = document.getElementById('poke-options');

    div.textContent = '';
    div.append(pokeImg1, pokeImg2, pokeImg3);
}