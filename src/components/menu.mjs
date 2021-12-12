import { createTemplateMenu } from '../templates/t-menu.mjs'

export const insertTemplateMenu = () => {
    const $menu = document.querySelector('.menu')
    $menu.innerHTML = createTemplateMenu()
}