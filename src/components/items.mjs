import {createItemTemplate, createDataItem} from '../templates/t-item.mjs'
import { animationOpacity, animationItemheightDown, animationItemheightUp } from '../animations.mjs'
// temporales hasta crear la api
const cositaSale = {
    id: 12,
    name:'Pikachu',
    sale: false,
    price: "5,00",
    salePrice: '4,00',
    url: '/src/assets/pikachu.png'
}
const searchItem = (id) => {
    return {
        id: id,
        size: '12x14',
        description: '¡Encuentra un hogar para tu stiker favorito! Todos nuestros stikers son de gran calidad, muy durareros y resistentes al agua.',
        labels: ['Sale', 'Otros']}
}
// 
export const itemsCreate = (object) => {
    let template = ''
    for(let i=0; i< object.total; i++) {
        template += createItemTemplate(cositaSale)
    }
    return template
}

export const listenerButton = () => {
    document.body.addEventListener('click', async (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            const id = elementTarget.id.slice(1)
            itemIteraction(id, elementTarget)
        }
    })
}
function itemIteraction (id, elementTarget) {
    if(elementTarget.id == `b${id}` || elementTarget.id == `c${id}`) {
        const $container = document.querySelector('.form-item')
        const $buttonItem = document.querySelector('.item-button')
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
        if(!document.querySelector(`#c${id}`)) {
            let obj = searchItem(id)
            let itemDescription = createDataItem(obj)
            $container.innerHTML = itemDescription
        }
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