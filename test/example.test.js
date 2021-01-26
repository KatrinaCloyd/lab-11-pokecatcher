// IMPORT MODULES under test here:
import { findById } from '../localStorageUtils.js';
import { pokemonData } from '../pokeData.js';
import { nameArray, seenArray, caughtArray } from '../results/resultsUtils.js';

const test = QUnit.test;

test('findById should return entire bulbasaur object when given id of 1', (expect) => {

    const expected = {
        '_id': '5cef3501ef6005a77cd4fd17',
        'pokemon': 'bulbasaur',
        'id': 1,
        'species_id': 1,
        'height': 7,
        'weight': 69,
        'base_experience': 64,
        'type_1': 'grass',
        'type_2': 'poison',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'special_attack': 65,
        'special_defense': 65,
        'speed': 45,
        'ability_1': 'overgrow',
        'ability_2': 'NA',
        'ability_hidden': 'chlorophyll',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'egg_group_1': 'monster',
        'egg_group_2': 'plant',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 1,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'bulbasaur',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, pokemonData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('nameArry function should take the local storage data and the base data and return an array of names', (expect) => {
    const fakeData = [
        {
            id: 15,
            seen: 1,
            caught: 0
        },
        {
            id: 19,
            seen: 1,
            caught: 0
        },
        {
            id: 12,
            seen: 2,
            caught: 0
        }];
    const expected = ['metapod', 'beedrill', 'blastoise'];
    const actual = nameArray(fakeData, pokemonData);
    expect.deepEqual(actual, expected);
});

test('seenArry function should take the local storage data and return an array of number of seens', (expect) => {
    const fakeData = [
        {
            id: 15,
            seen: 1,
            caught: 0
        },
        {
            id: 19,
            seen: 1,
            caught: 0
        },
        {
            id: 12,
            seen: 2,
            caught: 0
        }];
    const expected = [1, 1, 2];
    const actual = seenArray(fakeData);
    expect.deepEqual(actual, expected);
});

test('caughtArry function should take the local storage data and return an array of number of seens', (expect) => {
    const fakeData = [
        {
            id: 15,
            seen: 1,
            caught: 0
        },
        {
            id: 19,
            seen: 1,
            caught: 0
        },
        {
            id: 12,
            seen: 2,
            caught: 1
        }];
    const expected = [0, 0, 1];
    const actual = caughtArray(fakeData);
    expect.deepEqual(actual, expected);
});
