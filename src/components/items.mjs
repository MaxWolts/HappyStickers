import {createItemTemplate, createDataItem } from '../templates/t-item.mjs'
import { animationOpacity, animationItemheightDown, animationItemheightUp, animationAddItem } from '../animations.mjs'
import { addItemsToCart } from './cart.mjs'
import { lazyItems } from '../lazy.mjs'

listenerButton()
formEvent()

export const createItems = (obj, container, nameCategory, disable) => {
    let flag = 0
    let containerItems = document.createElement('div')
    containerItems.className = 'sub-items'
    obj.forEach(element => {
        if(flag < 3) {
            containerItems.appendChild(createItemTemplate(element))
            flag++
        }else {
            container.appendChild(containerItems)
            containerItems = document.createElement('div')
            containerItems.className = 'sub-items'
            containerItems.appendChild(createItemTemplate(element))
            flag = 1
        }
    })
    container.appendChild(containerItems)
    lazyItems(obj, nameCategory, disable)
}

function listenerButton() {
    document.body.addEventListener('click', async (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            const id = elementTarget.id.slice(1)
            itemInteraction(id, elementTarget)
            addAnimationAddItem(elementTarget)
        }
    })
}
function itemInteraction (id, elementTarget) {
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
export function formEvent() {
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
export const removeAllItems = (container) => {
    while(container.firstElementChild){
        container.firstElementChild.remove()
    }
}

function addAnimationAddItem(button) {
    if (button.className == 'add-button') {
        let animation = animationAddItem(`#${button.id}`)
        setTimeout(() => {
            button.disabled = true
            animation.play()
        }, 0);
        setTimeout(async () => {
            await animation.reverse()
            button.disabled = false
        }, 1300);
    }
}