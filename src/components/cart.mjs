import { createTemplateCart } from '../templates/t-cart.mjs'

export const insertTemplateCart = () => {
    const $cart = document.querySelector('.cart')
    $cart.innerHTML = createTemplateCart()
}