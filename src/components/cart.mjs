import { createTemplateCart, createCartItem } from '../templates/t-cart.mjs'

export const insertTemplateCart = () => {
    const $body = document.querySelector('body')
    $body.appendChild(createTemplateCart())
    listenerButtons()
}

export const addItemsToCart = (objInfo) => {
    let $cartItems = document.querySelector('.cart-articles')
    if($cartItems.children){
        let $flag = document.querySelector('.cart-flag')
        $flag.style.display = 'none'
    }
    $cartItems.appendChild(createCartItem(objInfo))
    actualiceTotalPrice()
    
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
                let items = document.querySelectorAll('.article')
                saveInfoCart(items)
            }
        }
    })
}
const deleteItem = (elementTarget) => {
    elementTarget.parentNode.remove()
    let $cartItems = document.querySelector('.cart-articles')
    if($cartItems.children.length == 0){
        let $flag = document.querySelector('.cart-flag')
        $flag.style.display = 'block'
    }
}
function saveInfoCart (node) {
    let ids = []
    Object(node).forEach(element => {
        ids.push(element.dataset.id)
    });
    let infoCart = {
        id: ids,
        quantity: calaculateQuantity(node),
        price: calculateTotal(node)
    }
    localStorage.setItem("infoCart", JSON.stringify(infoCart))
    window.location.href = "http://172.19.199.247:5500/payment.html";
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