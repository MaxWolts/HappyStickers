export const createTemplateCart = () => {
    let content = document.createElement('div')
    content.className = 'cart'

    let titleCart = document.createElement('h2')
    titleCart.className = 'cart-title'
    titleCart.innerText = 'Tu carrito'
    content.appendChild(titleCart)

    let descriptionTitle = document.createElement('p')
    descriptionTitle.textContent= 'Descripción:'
    content.appendChild(descriptionTitle)

    let flag = document.createElement('p')
    flag.className = 'cart-flag'
    flag.innerText = 'Aun no agregaste stikers a tu carrito 💔'
    content.appendChild(flag)

    let articlesContainer = document.createElement('div')
    articlesContainer.className = 'cart-articles'
    content.appendChild(articlesContainer)

    let articleTotal = document.createElement('div')
    articleTotal.className = 'cart-articles-total'
    let totalText = document.createElement('p')
    totalText.innerText= 'Total'
    articleTotal.appendChild(totalText)
    let totalPrice = document.createElement('p')
    totalPrice.className = 'articles-total-price'
    totalPrice.innerText= '$0'
    articleTotal.appendChild(totalPrice)
    content.appendChild(articleTotal)

    let buttonsContainer = document.createElement('div')
    buttonsContainer.className = 'cart-buttons'
    let buttonEnd = document.createElement('button')
    buttonEnd.className = 'end-button'
    buttonEnd.innerText = 'Terminar compra'
    buttonsContainer.appendChild(buttonEnd)
    let buttonReturn = document.createElement('button')
    buttonReturn.className = 'return-button'
    buttonReturn.innerText = 'Volver'
    buttonsContainer.appendChild(buttonReturn)
    content.appendChild(buttonsContainer)

    return content
}

export const createCartItem = (objInfo) => {
    let item = document.createElement('div')
    item.className= 'article'
    item.dataset.id = objInfo.id
    item.dataset.name = objInfo.name
    item.dataset.price = objInfo.price * objInfo.quantity
    item.dataset.quantity = objInfo.quantity
    let name = document.createElement('p')
    name.className= 'article-name'
    name.innerText= objInfo.name
    item.appendChild(name)

    let quantity = document.createElement('p')
    quantity.className = 'article-quantity'
    quantity.innerText = `x${objInfo.quantity}`
    item.appendChild(quantity)

    let price = document.createElement('p')
    price.className = 'article-price'
    price.innerText = `$${objInfo.price * objInfo.quantity}`
    item.appendChild(price)

    let deleteButton = document.createElement('button')
    deleteButton.className = 'article-delete-button'
    deleteButton.innerText= 'X'
    item.appendChild(deleteButton)

    return item
}