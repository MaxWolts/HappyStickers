import { createTemplateMenu } from '../templates/t-menu.mjs'
import { getStikerCategory } from '../api-stikers.mjs'
import { thiIsPrube } from '../components/items.mjs'
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
        let items = thiIsPrube(res.products, res.name)
        let $body = document.querySelector('body')
        $body.appendChild(items)
    })

}