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

}
const listenerButtons = () => {
    document.body.addEventListener('click', (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            if (elementTarget.className === 'article-delete-button') {
                deleteItem(elementTarget)
            }
            if (elementTarget.className === 'return-button') {
                let buttonCart = document.querySelector('.header-cart')
                buttonCart.click()
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
