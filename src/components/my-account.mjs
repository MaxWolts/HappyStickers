import { getMyOrders } from '../api-stikers.mjs'
import { createOrder } from '../templates/t-my-account.mjs'
const $orders = document.querySelector('.my-orders')
getMyOrders().then(res => {
    res.forEach(element => {
        let objOrder = createObjMyOrder(element)
        let orderHtml = createOrder(objOrder)
        $orders.appendChild(orderHtml)
    });
})

const createObjMyOrder = (element) => {
    let items = []
        element.items.forEach(element => {
            let item = {
                name: element.name,
                amount: element.OrderProduct.amount,
                price: (element.price * element.OrderProduct.amount)
            }
            items.push(item)
        });
    const obj = {
        totalPrice: `$${element.total}`,
        date: element.createdAt.slice(0,10),
        items: items
    }
    return obj
}