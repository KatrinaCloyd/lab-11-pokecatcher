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
export function caughtArray(arrayFromCart) {
    const caughtArray = [];
    for (let item of arrayFromCart) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}
