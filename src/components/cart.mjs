import { createTemplateCart, createCartItem } from '../templates/t-cart.mjs'

export const insertTemplateCart = () => {
    const $body = document.querySelector('body')
    $body.appendChild(createTemplateCart())
    
    loadItemsOfStorage()
    
}

export const addItemsToCart = (objInfo) => {
    let $cartItems = document.querySelector('.cart-articles')
    if($cartItems.children){
        let $flag = document.querySelector('.cart-flag')
        $flag.style.display = 'none'
    }
    $cartItems.appendChild(createCartItem(objInfo))
    actualiceTotalPrice()
    saveInfoCart()
    enableButtonCart()
}
const listenerButtons = () => {
    document.body.addEventListener('click', (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            if (elementTarget.className === 'article-delete-button') {
                deleteItem(elementTarget)
                actualiceTotalPrice()
            }
            if (elementTarget.className === 'return-button') {
                let buttonCart = document.querySelector('.header-cart')
                buttonCart.click()
            }
            if (elementTarget.className === 'end-button') {
                
                saveInfoCart()
                if (!document.cookie || document.cookie == 'token=undefined') {
                    window.location.href = "./login.html"
                } else {
                    window.location.href = "/payment.html"
                }
            }
        }
    })
}
listenerButtons()

const deleteItem = (elementTarget) => {
    elementTarget.parentNode.remove()
    let $cartItems = document.querySelector('.cart-articles')
    if($cartItems.children.length == 0){
        disableButtonCart()
        let $flag = document.querySelector('.cart-flag')
        $flag.style.display = 'block'
    }
    saveInfoCart()
}
function saveInfoCart() {
    let node = document.querySelectorAll('.article')
    let ids = []
    let names = []
    let quantities= []
    let prices = []
    Object(node).forEach(element => {
        ids.push(element.dataset.id)
        names.push (element.dataset.name)
        quantities.push (element.dataset.quantity)
        prices.push (element.dataset.price)
    });
    let infoCart = {
        id: ids,
        names:names,
        quantities: quantities,
        prices: prices,
        quantity: calaculateQuantity(node),
        price: calculateTotal(node)
    }
    localStorage.setItem("infoCart", JSON.stringify(infoCart))
}
function actualiceTotalPrice () {
    let priceTotalText = document.querySelector('.articles-total-price')
    let articles = document.querySelectorAll('.article')
    let total = calculateTotal(articles)
    priceTotalText.textContent = `$${total}`
}
function calculateTotal (node) {
    let total = 0
    Object(node).forEach(element => {
        total += parseInt(element.dataset.price)
    });
    return total
}
function calaculateQuantity (node) {
    let total = 0
    Object(node).forEach(element => {
        total += parseInt(element.dataset.quantity)
    });
    return total
}
function disableButtonCart() {
    let button = document.querySelector('.end-button')
    button.disabled = true
    button.style.display = 'none'
}
function enableButtonCart() {
    let button = document.querySelector('.end-button')
    button.disabled = false
    button.style.display = 'block'
}

function loadItemsOfStorage() {
    let items = JSON.parse(localStorage.getItem('infoCart'))
    if(items && items.id.length > 0) {
        let names = items.names
        let ids = items.id
        let prices = items.prices
        let quantities = items.quantities
        let price = 0
        for (let i = 0; i < ids.length; i++) {
            if (quantities[i]>1) {
                price = (`${parseInt(prices[i])/parseInt(quantities[i])}`)
            }else {
                price = prices[i]
            }
            addItemsToCart({
                id: ids[i],
                name: names[i],
                price: price,
                quantity: quantities[i]
            })
        }
        enableButtonCart()
    }else {
        disableButtonCart()
    }
}