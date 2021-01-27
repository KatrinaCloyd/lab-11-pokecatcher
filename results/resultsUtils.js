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

/*
//function takes in a single array (items in cart)
//this gets an array of the types of the caught pokemon INCLUDING duplicates
export function typeCountArray(itemsInCart, dataArray) {
    let typeArray = [];
    for (let itemInLS of itemsInCart) {
        if (itemInLS.caught > 0) {
            let item = findById(itemInLS.id, dataArray);
            typeArray.push(item.type_1);
        }
    }
    console.log(typeArray);
    //so now typeArray is an array of types we caught WITH REPEATS
    let countArr = [];
    for (let i = 0; i < typeArray.length; i++) {
        const element1 = typeArray[i];
        let countItem = 1;
        for (let i = 1; i < typeArray.length; i++) {
            const element2 = typeArray[i];
            if (element1 === element2) {
                typeArray.splice(i, 1);
                countItem++;
                return countItem;
            }
            countArr.push(countItem);
            return countArr;
        }
    }
}
*/
export function typeCountArray(itemsInCart, dataArray) {
    let typeArray = [];
    for (let itemInLS of itemsInCart) {
        if (itemInLS.caught > 0) {
            let item = findById(itemInLS.id, dataArray);
            typeArray.push(item.type_1);
        }
    }
    var counts = [];
    console.log(typeArray);
    // eslint-disable-next-line space-before-function-paren
    typeArray.forEach(function (_item) {
        if (typeof counts[_item] === 'undefined') counts[_item] = 1;
        else counts[_item]++;
    });
    var result = [];
    for (let i in counts) result.push(counts[i]);
    return result;
}
