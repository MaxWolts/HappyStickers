export const createTemplateMenu = () => {
    const menu = `
        <div class="search">
            <form class="search-form" action="">
                <input type="text" placeholder="Busca tu stiker por su nombre"
                
                />
                <button type="reset" class="clean">X</button>
                <button class="search">
                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4957 18.4174C16.5361 20.397 13.8171 21.6233 10.8117 21.6233C4.84054 21.6233 0 16.7828 0 10.8117C0 4.84054 4.84054 0 10.8117 0C16.7828 0 21.6233 4.84054 21.6233 10.8117C21.6233 12.6937 21.1424 14.4634 20.2969 16.0046L27.1747 22.1182L25.1816 24.3604L18.4957 18.4174ZM19.4336 10.8116C19.4336 15.5734 15.5734 19.4336 10.8117 19.4336C6.04988 19.4336 2.1897 15.5734 2.1897 10.8116C2.1897 6.04986 6.04988 2.18968 10.8117 2.18968C15.5734 2.18968 19.4336 6.04986 19.4336 10.8116Z" fill="#FAFAFA"/>
                    </svg>
                </button>
            </form>
        </div>
        <div class="buttons-menu">
            <button class="account-button">Mi cuenta</button>
            <button class="cart-button">Carrito</button>
            <p>Categorías:</p>
            <button class="category-button" data-categoryid="2">Anime</button>
            <button class="category-button" data-categoryid="3">Juegos</button>
            <button class="category-button" data-categoryid="5">Comics</button>
            <button class="category-button" data-categoryid="4">Varios</button>
        </div>
    `
    return menu
}