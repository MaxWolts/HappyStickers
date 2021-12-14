import { createTemplateMenu } from '../templates/t-menu.mjs'
import { getStikerCategory, getStikerByName } from '../api-stikers.mjs'
import { createItems } from '../components/items.mjs'
export const insertTemplateMenu = () => {
    const $menu = document.querySelector('.menu')
    $menu.innerHTML = createTemplateMenu()
}

export const listenerButtonCategory = () => {
    document.body.addEventListener('click', async (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            const categoryId = elementTarget.dataset.categoryid
            if (categoryId) {
                actionCategory(categoryId)
            }
        }
    })
}
function actionCategory (id) {
    getStikerCategory(id).then((res) => {
        document.querySelector('.items').remove()
        let items = createItems(res.products, res.name)
        let $body = document.querySelector('body')
        $body.appendChild(items)
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
                let $body = document.querySelector('body')
                if (Object.keys(res).length > 0){
                    document.querySelector('.items').remove()
                    let items = createItems(res, res.name)
                    $body.appendChild(items)
                    let menu = document.querySelector('.header-menu')
                    menu.click()
                }else {
                    window.alert('No se encontro resultado')
                }
            })
        }
    })
}

