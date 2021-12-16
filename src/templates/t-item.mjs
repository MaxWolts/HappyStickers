import {registerImage} from "../lazy.mjs"

export function createItemTemplate(object, nameCategory) {
    let container = document.createElement('div')
    let imgContainer = document.createElement('div')
    let descriptionContainer = document.createElement('form')
    descriptionContainer.dataset.name = `${object.name}`
    descriptionContainer.dataset.price = `${object.price}`
    descriptionContainer.dataset.id = `${object.id}`
    container.className = 'item'
    container.id= `i${object.id}`

    imgContainer.className = 'item-imgContainer'
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    img.dataset.src = `${object.image}`
    img.alt = `imagen del stiker ${object.name}`
    registerImage(img)
    figure.appendChild(img)
    imgContainer.appendChild(figure)
    container.appendChild(imgContainer)

    descriptionContainer.className = 'item-description'
    descriptionContainer.innerHTML = createDescription(object, nameCategory)
    container.appendChild(descriptionContainer)
    return container
}
function createDescription(object, nameCategory) {
    let container = `
        <p class="name" name="name"> <strong>${object.name}</strong> </p>
        <div class="price"> 
            <p name="price">$${object.price}</p>
        </div>
        
        <div class='form-item' id='f${object.id}'>
        ${createDataItem(object, nameCategory)}
        </div>
        <button class="item-button" type="button" id='b${object.id}'>Detalles</button>
    `
    return container
}

export function createDataItem (object, nameCategory) {
    let category = ''
    if(nameCategory) {
        category = nameCategory
    }else {
        category += object.category.name
    }
    const template = `
        <p class="description">${object.description}</p>
        <p class="size">Tamaño: 6x7cm</p>
        <p class="item-categories">Categorias:
            ${category}
        </p>
        <div class="add-to-cart" action="#">
            <p class="item-quantity">Cantidad:
                <input name="quantity" type="number" name="numero" value="1" min="1" max="50" required pattern="[0-9]{5}" />
            </p>
            <div class="add-to-cart-buttons">
                <button class='add-button' type="submit" id='a${object.id}'>Añadir al carrito</button>
                <button class='closed-button' type="button" id='c${object.id}'>Cerrar</button>
            </div>
        </div>`
    return template
}
