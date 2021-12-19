export const createOrder = (obj) => {
    const order = createElement({typeElement:'div', className: 'order'})
    const firstData = createElement({typeElement:'div', className: 'order-first-data'})
    const date = createElement({typeElement: 'div', className: 'date'})
    const day = createElement ({typeElement: 'span', content: 'Dia'})
    date.appendChild(day)
    const dayData = createElement({typeElement: 'span', content: obj.date})
    date.appendChild(dayData)
    // const amount = createElement ({typeElement: 'span', content: obj.amount})
    const total = createElement ({typeElement: 'div', className: 'total'})
    const totalText = createElement({typeElement: 'span', content: 'Total:'})
    const totalPrice = createElement({typeElement: 'span', content: obj.totalPrice})
    total.appendChild(totalText)
    total.appendChild(totalPrice)
    firstData.appendChild(date)
    // firstData.appendChild(amount)
    firstData.appendChild(total)
    order.appendChild(firstData)
    
    const items = createElement({typeElement: 'div', className: 'order-items'})
    obj.items.forEach(element => {
        const item = createElement({typeElement: 'div', className: 'item'})
        const name = createElement({typeElement: 'span', content: element.name})
        const amount = createElement({typeElement: 'span', content: element.amount})
        const price = createElement({typeElement: 'span', content: element.price})
        item.appendChild(name)
        item.appendChild(amount)
        item.appendChild(price)
        items.appendChild(item)
    });
    order.appendChild(items)
    return order
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