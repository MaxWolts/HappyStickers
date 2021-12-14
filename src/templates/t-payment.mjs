
let infoCart = JSON.parse(localStorage.getItem("infoCart"))

export const createItemTotal = (content) => {
    let textCart = document.createElement('p')
    textCart.innerText = 'Tu carrito'
    content.appendChild(textCart)

    let textQuantity = document.createElement('p')
    textQuantity.innerText = `x${infoCart.quantity}`
    content.appendChild(textQuantity)

    let textPrice = document.createElement('p')
    textPrice.innerText = `$${infoCart.price}`
    content.appendChild(textPrice)
}