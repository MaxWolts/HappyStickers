import {itemsCreate, listenerButton, thiIsPrube} from './components/items.mjs'
const $itemContainer = document.querySelector('body')
import { insertHeader } from './components/header.mjs'
insertHeader()

// $itemContainer.innerHTML = itemsCreate({total:5})
// listenerButton()

import { insertTemplateMenu } from './components/menu.mjs'
insertTemplateMenu()

import { insertTemplateCart } from './components/cart.mjs'
insertTemplateCart()


import { getAllstikers } from './api-stikers.mjs'
const loadStikers = (exito) => {
    let cosita = thiIsPrube(exito)
    $itemContainer.appendChild(cosita)
    listenerButton()
    // console.log(cosita)
}
getAllstikers().then(loadStikers)

import { listenerButtonCategory } from './components/menu.mjs'
listenerButtonCategory()

