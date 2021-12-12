let saleStiker = `<svg width="64" class='sale-stiker' height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.1528 0L40.2423 6.54695L50.8721 5.72949L53.3316 15.5052L62.4413 20.7295L58.3312 30L62.4413 39.2705L53.3316 44.4948L50.8721 54.2705L40.2423 53.4531L32.1528 60L24.0632 53.4531L13.4334 54.2705L10.974 44.4948L1.86426 39.2705L5.97435 30L1.86426 20.7295L10.974 15.5052L13.4334 5.72949L24.0632 6.54695L32.1528 0Z" fill="#FF5F7E"/>
<path d="M20.061 32.679C20.061 32.2916 19.9243 31.9954 19.6509 31.7903C19.3774 31.5806 18.8852 31.3619 18.1743 31.134C17.4634 30.9016 16.9005 30.6737 16.4858 30.4504C15.3556 29.8398 14.7905 29.0172 14.7905 27.9827C14.7905 27.4449 14.9409 26.9664 15.2417 26.5471C15.547 26.1233 15.9822 25.7929 16.5473 25.5559C17.117 25.3189 17.755 25.2004 18.4614 25.2004C19.1723 25.2004 19.8058 25.3303 20.3618 25.5901C20.9178 25.8453 21.3484 26.2076 21.6538 26.677C21.9637 27.1464 22.1186 27.6796 22.1186 28.2766H20.0678C20.0678 27.8209 19.9243 27.4677 19.6372 27.217C19.3501 26.9618 18.9468 26.8342 18.4272 26.8342C17.9259 26.8342 17.5363 26.9413 17.2583 27.1555C16.9803 27.3652 16.8413 27.6431 16.8413 27.9895C16.8413 28.3131 17.0031 28.5842 17.3266 28.803C17.6548 29.0217 18.1356 29.2268 18.769 29.4182C19.9357 29.7691 20.7856 30.2043 21.3188 30.7239C21.852 31.2434 22.1186 31.8905 22.1186 32.6653C22.1186 33.5266 21.7928 34.2034 21.1411 34.6956C20.4894 35.1832 19.6121 35.427 18.5093 35.427C17.7436 35.427 17.0464 35.288 16.4175 35.01C15.7885 34.7275 15.3078 34.3424 14.9751 33.8547C14.6469 33.3671 14.4829 32.802 14.4829 32.1594H16.5405C16.5405 33.2577 17.1968 33.8069 18.5093 33.8069C18.9969 33.8069 19.3774 33.7089 19.6509 33.5129C19.9243 33.3124 20.061 33.0344 20.061 32.679ZM29.1323 33.2395H25.5366L24.853 35.2903H22.6723L26.3774 25.3372H28.2778L32.0034 35.2903H29.8227L29.1323 33.2395ZM26.0903 31.5784H28.5786L27.3276 27.8528L26.0903 31.5784ZM34.9839 33.6428H39.3384V35.2903H32.9331V25.3372H34.9839V33.6428ZM46.5093 30.9768H42.5718V33.6428H47.1928V35.2903H40.521V25.3372H47.1792V26.9983H42.5718V29.3704H46.5093V30.9768ZM50.2759 32.2346H48.6352L48.4028 25.3372H50.5083L50.2759 32.2346ZM49.4555 33.3147C49.7882 33.3147 50.0548 33.4127 50.2553 33.6086C50.4604 33.8046 50.563 34.0553 50.563 34.3606C50.563 34.6614 50.4604 34.9097 50.2553 35.1057C50.0548 35.3017 49.7882 35.3997 49.4555 35.3997C49.1274 35.3997 48.8608 35.3017 48.6557 35.1057C48.4552 34.9097 48.355 34.6614 48.355 34.3606C48.355 34.0598 48.4552 33.8114 48.6557 33.6155C48.8608 33.415 49.1274 33.3147 49.4555 33.3147Z" fill="#FAFAFA"/>
<path d="M14.0112 36.6575H51.3149V37.3411H14.0112V36.6575Z" fill="#FAFAFA"/>
</svg>
`
export function createItemTemplate (object) {
    let throwLine = ''
    let sale = ''
    let stiker = ''
    if(object.sale){
        sale = `<p>$${object.salePrice}</p>`
        throwLine = 'price-sale'
        stiker += saleStiker
    }
    const template =
    `<div class="item" id='i${object.id}'>
        <div class="item-imgContainer">
            ${stiker}
            <figure>
                <img data-src="${object.image}" alt="" class="imgStiker"/>
            </figure>
        </div>
        <div class="item-description">
            <p class="name"> <strong>${object.name}</strong> </p>
            <div class="price"> 
                <p class="${throwLine}">$${object.price}.00</p>
                ${sale}
            </div>
            
            <div class='form-item' id='f${object.id}'>
            ${createDataItem(object)}
            </div>
            <button class="item-button" type="button" id='b${object.id}'>Detalles</button>
        </div>
    </div>`
    return template
}

export function createDataItem (object) {
    const template = `
        <p class="description">${object.description}</p>
        <p class="size">Tamaño: 6x7cm</p>
        <p class="item-categories">Categorias:
            ${object.category.name}
        </p>
        <form class="add-to-cart" action="#">
            <p class="item-quantity">Cantidad:
                <input type="number" name="numero" value="1" min="1" max="50" required pattern="[0-9]{5}" />
            </p>
            <div class="add-to-cart-buttons">
                <button class='add-button' type="submit">Añadir al carrito</button>
                <button class='closed-button' type="button" id='c${object.id}'>Cerrar</button>
            </div>
        </form>`
    return template
}
