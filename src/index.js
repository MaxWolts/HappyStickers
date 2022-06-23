import { createItems } from './components/items.mjs'
import { insertHeader } from './components/header.mjs'
import { insertTemplateMenu } from './components/menu.mjs'
import { insertTemplateCart } from './components/cart.mjs'
import { getStikers } from './api-stikers.mjs'
import { listenerButtonCategory, listenerSearchByName } from './components/menu.mjs'
const $itemContainer = document.querySelector('.items')
insertHeader()
insertTemplateMenu()
insertTemplateCart()
const loadStikers = async (exito) => {
    await createItems(exito, $itemContainer)
}
getStikers().then(loadStikers)
listenerButtonCategory()
listenerSearchByName()









