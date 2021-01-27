import { findById } from '../localStorageUtils.js';

export function renderLineItems(pokeInCart, pokeFromData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = pokeFromData.pokebase;

    const tdCaughtQty = document.createElement('td');
    tdCaughtQty.textContent = pokeInCart.caught;

    const tdSeentQty = document.createElement('td');
    tdSeentQty.textContent = pokeInCart.seen;

    tr.append(tdName, tdCaughtQty, tdSeentQty);

    return tr;
}

export function nameArray(arrayFromCart, dataArray) {
    const nameArry = [];
    //for all poke in cart get name from data array for same id#

    //this gets the item from dataArry based on id in cart
    for (let itemInLS of arrayFromCart) {
        let item = findById(itemInLS.id, dataArray);
        //return the pokebase of an item from dataArray 
        nameArry.push(item.pokebase);
        //add that name to the blank array 
    }
    return nameArry;
}

export function seenArray(arrayFromCart) {
    const seenArray = [];
    for (let item of arrayFromCart) {
        seenArray.push(item.seen);
    }
    return seenArray;
}
//gives an array of number of caughts ONLY 
export function caughtArray(arrayFromCart) {
    const caughtArray = [];
    for (let item of arrayFromCart) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}

//needs to take in storage data and base data 
//returns an array of types of items CAUGHT in storage with no duplicates 
export function typeOfCaughtArray(itemsInCart, dataArray) {
    let typeArray = [];
    for (let itemInLS of itemsInCart) {
        if (itemInLS.caught > 0) {
            let item = findById(itemInLS.id, dataArray);
            typeArray.push(item.type_1);
        }
    }
    let uniqueTypeArray = [];
    typeArray.forEach((c) => {
        if (!uniqueTypeArray.includes(c)) {
            uniqueTypeArray.push(c);
        }
    });
    return uniqueTypeArray;
}

//this returns array of types, including duplicates. 
//need to count up how many times an item appears in the array and add that to the array 
export function typeCountArray(storageArray, dataArray) {
    let typeArray = [];
    for (let itemInLS of storageArray) {
        let item = findById(itemInLS.id, dataArray);
        typeArray.push(item.type_1);
    }
    let typeCountArray = [];
    for (let type of typeArray) {
        //for each type in array{i} look to see if it is equal to the next one, or next one, or next one. 
        //if so ++ counter if not create counter of 1, 


    }
}