import {itemsCreate, listenerButton, thiIsPrube} from './components/items.mjs'
const $itemContainer = document.querySelector('.items')
import { insertHeader } from './components/header.mjs'
insertHeader()

// $itemContainer.innerHTML = itemsCreate({total:5})
// listenerButton()


import { insertTemplateMenu } from './components/menu.mjs'
insertTemplateMenu()

import { insertTemplateCart } from './components/cart.mjs'
insertTemplateCart()

const link = 'https://happystiker.herokuapp.com/api/v1'

const stikerData = async () => {
    try {
        const response = await fetch(`${link}/products`)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}
const exito = (exito) => {
    let cosita = thiIsPrube(exito)
    $itemContainer.innerHTML = cosita
    listenerButton()
    // console.log(cosita)
}
stikerData().then(exito)

