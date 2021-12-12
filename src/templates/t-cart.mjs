export const createTemplateCart = () => {
    const cart = `
        <h2 class="cart-title">Tu carrito</h2>
        <p>Descipción:</p>
        <div class="cart-articles">
            <div class="article">
                <p class="article-name">Pikachu</p>
                <p class="article-count">x1</p>
                <div class="article-price">
                    <p>$5,00</p>
                    <p>$4,00</p>
                </div>
                <button class="article-button">X</button>
            </div>
            <div class="article">
                <p class="article-name">Pikachu</p>
                <p class="article-count">x1</p>
                <div class="article-price">
                    <p>$5,00</p>
                    <p>$4,00</p>
                </div>
                <button class="article-button">X</button>
            </div>
            <div class="cart-articles-total">
                <p>Total</p>
                <p class="total-price"> $4,00</p>
            </div>
        </div>
        <div class="cart-buttons">
            <button class="end-button">Terminar compra</button>
            <button class="return-button">Volver</button>
        </div>
    `
    return cart
}