import { createTemplateMenu } from '../templates/t-menu.mjs'
import { getStikerByName, getStikers } from '../api-stikers.mjs'
import { createItems, removeAllItems } from '../components/items.mjs'
import { observerFooter } from '../lazy.mjs'
export const insertTemplateMenu = () => {
    const $menu = document.querySelector('.menu')
    createTemplateMenu($menu)
}

export const listenerButtonCategory = () => {
    document.body.addEventListener('click', async (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            const categoryId = elementTarget.dataset.categoryid
            if (categoryId) {
                actionCategory(categoryId)
            }
            if(elementTarget.className == 'login-unlogin-button') {
                console.log('salir')
                document.cookie = "token=; max-age=0";
                console.log('cookie eliminada')
                window.location.reload();
            }
        }
    })
}
function actionCategory (id) {
    getStikers(12, 0,id).then((res) => {
        let $itemsContainer = document.querySelector('.items')
        removeAllItems($itemsContainer)
        createItems(res, $itemsContainer, id)
        let menu = document.querySelector('.header-menu')
        menu.click()
    })
}
export function listenerSearchByName () {
    let $searchForm = document.querySelector('.search-form')
    $searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = new FormData($searchForm)
        let name = data.get('name')
        if (name !== '') {
            getStikerByName(name).then((res) => {
                if (Object.keys(res).length > 0){
                    let $itemsContainer = document.querySelector('.items')
                    removeAllItems($itemsContainer)
                    let $footer = document.querySelector('footer')
                    observerFooter.unobserve($footer)
                    setTimeout(() => {
                        createItems(res, $itemsContainer, res.name, 'disable')
                        let menu = document.querySelector('.header-menu')
                        menu.click()
                    }, 400);
                }else {
                    window.alert('No se encontro resultado')
                }
            })
        }
    })
}
