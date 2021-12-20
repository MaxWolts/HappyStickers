import { createItems } from './components/items.mjs'
const $itemContainer = document.querySelector('.items')
import { insertHeader } from './components/header.mjs'
insertHeader()


import { insertTemplateMenu } from './components/menu.mjs'
insertTemplateMenu()

import { insertTemplateCart } from './components/cart.mjs'
insertTemplateCart()


import { getStikers } from './api-stikers.mjs'

const loadStikers = async (exito) => {
    await createItems(exito, $itemContainer)
}
getStikers().then(loadStikers)

import { listenerButtonCategory, listenerSearchByName } from './components/menu.mjs'
listenerButtonCategory()
listenerSearchByName()


