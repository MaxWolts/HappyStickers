import {itemsCreate, listenerButton} from './components/items.mjs'
const $itemContainer = document.querySelector('.items')


$itemContainer.innerHTML = itemsCreate({total:1})
listenerButton()


