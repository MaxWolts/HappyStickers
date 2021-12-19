const svgIcon = `<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4957 18.4174C16.5361 20.397 13.8171 21.6233 10.8117 21.6233C4.84054 21.6233 0 16.7828 0 10.8117C0 4.84054 4.84054 0 10.8117 0C16.7828 0 21.6233 4.84054 21.6233 10.8117C21.6233 12.6937 21.1424 14.4634 20.2969 16.0046L27.1747 22.1182L25.1816 24.3604L18.4957 18.4174ZM19.4336 10.8116C19.4336 15.5734 15.5734 19.4336 10.8117 19.4336C6.04988 19.4336 2.1897 15.5734 2.1897 10.8116C2.1897 6.04986 6.04988 2.18968 10.8117 2.18968C15.5734 2.18968 19.4336 6.04986 19.4336 10.8116Z" fill="#FAFAFA"/>
</svg>`

export const createTemplateMenu = (container) => {
    const searchBar = createSearchBar()
    const menuButtons = createButtonsMenu()
    container.appendChild(searchBar)
    container.appendChild(menuButtons)
    return menuButtons
}

const createElement = (data) => {
    const res = document.createElement(data.typeElement)
    if (data.className) {
        res.className = data.className
    }
    if(data.content) {
        res.innerText = data.content
    }
    if(data.ariaLabel) {
        res.ariaLabel = data.ariaLabel
    }
    if (data.name) {
        res.name = data.name
    }
    if (data.type) {
        res.type = data.type
    }
    if (data.placeholder) {
        res.placeholder = data.placeholder
    }
    if (data.role) {
        res.role = data.role
    }
    if (data.onclick) {
        res.onclick = data.onclick
    }
    return res
}
const createSearchBar = () => {
    const searchContainer = createElement( {typeElement: 'DIV',className: 'search',})
    const form = createElement({typeElement: 'FORM',className: 'search-form',})
    const input = createElement({typeElement: 'INPUT', type: 'text', name: 'name', placeholder: 'Busca tu sticker por su nombre'})
    form.appendChild(input)
    const buttonClean = createElement({typeElement: 'BUTTON', type: 'reset', className: 'clean', content: 'X', ariaLabel: 'borrar contenido del input'})
    form.appendChild(buttonClean)
    const buttonSearch = createElement({typeElement: 'BUTTON', className: 'search', ariaLabel: 'Realizar busqueda'})
    buttonSearch.innerHTML = svgIcon
    form.appendChild(buttonSearch)
    searchContainer.appendChild(form)
    return searchContainer
}


const createButtonsMenu = () => {
    const buttonsContainer = createElement({typeElement:'DIV',className: 'buttons-menu'})
    
    let aux = document.createElement('div')
    
    if (!document.cookie || document.cookie == 'token=undefined') {
        aux.innerHTML = `<button class="login-button" role='link' onclick="window.location='../../login.html'">Logearme</button>
        `
    }else {
        const accountButton = document.createElement('div')
        accountButton.innerHTML = `<button class="account-button" role='link' onclick="window.location='../../my-account.html'">Mi cuenta</button>
        `
        buttonsContainer.appendChild(accountButton.firstElementChild)
        aux.appendChild(createElement({
            typeElement: 'BUTTON',
            className: 'unlogin-button',
            content: 'Cerrar sessión',
        }))
    }
    let buttonLoginUnlogin = aux.firstElementChild
    buttonsContainer.appendChild(buttonLoginUnlogin)
    const titleCategories = createElement({
        typeElement: 'p',
        content:'Categorías',
    })
    buttonsContainer.appendChild(titleCategories)
    const categoryAnimeButton =  createElement({
        typeElement: 'BUTTON',
        className: 'category-button',
        content: 'Anime',
    })
    categoryAnimeButton.dataset.categoryid = '2'
    buttonsContainer.appendChild(categoryAnimeButton)

    const categoryJuegosButton =  createElement({
        typeElement: 'BUTTON',
        className: 'category-button',
        content: 'Juegos',
    })
    categoryJuegosButton.dataset.categoryid = '3'
    buttonsContainer.appendChild(categoryJuegosButton)
    
    const categoryComicsButton =  createElement({
        typeElement: 'BUTTON',
        className: 'category-button',
        content: 'Comics',
    })
    categoryComicsButton.dataset.categoryid = '5'
    buttonsContainer.appendChild(categoryComicsButton)

    const categoryVariosButton =  createElement({
        typeElement: 'BUTTON',
        className: 'category-button',
        content: 'Varios',
    })
    categoryVariosButton.dataset.categoryid = '4'
    buttonsContainer.appendChild(categoryVariosButton)
    

    return buttonsContainer
}