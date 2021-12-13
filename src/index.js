import { listenerButton, createItems } from './components/items.mjs'
const $itemContainer = document.querySelector('body')
import { insertHeader } from './components/header.mjs'
insertHeader()


import { insertTemplateMenu } from './components/menu.mjs'
insertTemplateMenu()

import { insertTemplateCart } from './components/cart.mjs'
insertTemplateCart()


import { getAllstikers, login } from './api-stikers.mjs'
const loadStikers = (exito) => {
    let cosita = createItems(exito)
    $itemContainer.appendChild(cosita)
    listenerButton()
}
getAllstikers().then(loadStikers)

import { listenerButtonCategory, listenerSearchByName } from './components/menu.mjs'
listenerButtonCategory()
listenerSearchByName()

/* ------------ */

// function c (element) {
//     console.log(element)
// }
// login().then(c)