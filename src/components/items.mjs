import {createItemTemplate, createDataItem } from '../templates/t-item.mjs'
import { animationOpacity, animationItemheightDown, animationItemheightUp } from '../animations.mjs'
import { addItemsToCart } from './cart.mjs'

export const createItems = (obj, nameCategory) => {
    let flag = 0
    let container = document.createElement('div')
    container.className = 'items'
    let containerItems = document.createElement('div')
    containerItems.className = 'sub-items'
    obj.forEach(element => {
        if(flag < 2) {
            containerItems.appendChild(createItemTemplate(element, nameCategory))
            flag++
        }else {
            container.appendChild(containerItems)
            containerItems = document.createElement('div')
            containerItems.className = 'sub-items'
            containerItems.appendChild(createItemTemplate(element, nameCategory))
            flag = 1
        }
    })
    container.appendChild(containerItems)
    return container
}

export const listenerButton = () => {
    document.body.addEventListener('click', async (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            const id = elementTarget.id.slice(1)
            itemIteraction(id, elementTarget)
        }
    })
    formEvent()
}
function itemIteraction (id, elementTarget) {
    if(elementTarget.id == `b${id}` || elementTarget.id == `c${id}`) {
        const $container = document.querySelector(`#f${id}`)
        const $buttonItem = document.querySelector(`#b${id}`)
        const $item = document.querySelector(`#i${id}`)
        if(elementTarget.className.includes('item-button')) {
            openItem(id, $container, $buttonItem, $item)
        }
        if(elementTarget.className.includes('closed-button')) {
            closedItem(elementTarget, $container, $buttonItem, $item)
        }
    }
}
function openItem(id, $container, $buttonItem, $item) {
    $buttonItem.disabled = true
    $buttonItem.style.opacity = 1
    animationOpacity($buttonItem)
    animationItemheightDown($item)
    setTimeout(() => {
        $buttonItem.style.display = 'none'
        animationOpacity($container)
        $container.style.display= 'block'
    }, 500);
    if(document.querySelector(`#c${id}`)) {
        document.querySelector(`#c${id}`).disabled = false
    }
}
function closedItem(elementTarget, $container, $buttonItem, $item) {
    elementTarget.disabled = true
    animationOpacity($container)
    setTimeout(() => {
        $container.style.display= 'none'
        animationOpacity($buttonItem)
        $buttonItem.style.display = 'block'
        animationItemheightUp($item)
    }, 400);
    $buttonItem.disabled = false
}

function formEvent() {
    document.body.addEventListener('submit', (event) => {
        event.preventDefault()
        const target = event.target
        if(target.className.includes('item-description')) {
            let data = new FormData(target)
            let objInfoItem = {
                id: target.dataset.id,
                name: target.dataset.name,
                price: target.dataset.price,
                quantity: data.get('quantity')
            }
            addItemsToCart(objInfoItem)
        }
    })
}