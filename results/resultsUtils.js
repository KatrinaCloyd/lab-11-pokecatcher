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