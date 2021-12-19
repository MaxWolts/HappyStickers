import { createOrder, addItemsToOrder } from '../api-stikers.mjs'
import { createItemTotal } from '../templates/t-payment.mjs'

let yourCart = document.querySelector('.your-cart')
createItemTotal(yourCart)

document.addEventListener('submit', (event) => {
    let flag = 0
    event.preventDefault()
    if (event.target) {
        createOrder().then( async res => {
            console.log(res)
            console.log(res.id)
            const obj = JSON.parse(localStorage.getItem('infoCart'))
            let item = {}
            for (let i = 0; i < obj.id.length; i++) {
                item = {
                    orderId: res.id,
                    productId: parseInt(obj.id[i]),
                    amount: parseInt(obj.quantities[i])
                }
                console.log(item)
                await addItemsToOrder(item).then (res => {
                    if(!res.error) {
                        flag++
                    }
                })
            }
        })
    }
    if (flag > 0) {
        localStorage.removeItem('infoCart')
    }
})