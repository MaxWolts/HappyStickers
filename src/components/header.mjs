import createTemplateHeader from "../templates/t-header.mjs";
import { controlLeftRightAnimations } from "../animations.mjs";

export const insertHeader = () => {
    const $header = document.querySelector('.header')
    $header.innerHTML = createTemplateHeader()
    addAnimations()
} 

function addAnimations() {
    const menuButton = document.querySelector('.header-menu')
    const cartButton = document.querySelector('.header-cart')
    const controlAnimation = controlLeftRightAnimations()
    menuButton.addEventListener('click', () => { 
        controlAnimation('menu')
    })
    cartButton.addEventListener('click', () => {
        controlAnimation('cart')
    })

}



