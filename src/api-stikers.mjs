const link = 'https://happystickers.herokuapp.com/api/v1'

const getStikers = async (limit, offset, categoryId) => {
    let params = ''
    let cId = ''
    if (limit && offset) {
        params = `?limit=${limit}&offset=${offset}`
    }else {
        params = `?limit=12&offset=0`
    }
    if(categoryId) {
        cId = `&categoryId=${categoryId}`
    }
    try {
        const response = await fetch(`${link}/products${params}${cId}`)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

const getStikerCategory = async (id) => {
    try {
        const response = await fetch(`${link}/categories/${id}`)
        const data = await response.json()
        return data
    } catch {
        return error
    }
}
const getStikerByName = async(name) => {
    try {
        const response = await fetch(`${link}/products/?name=${name}`)
        const data = await response.json()
        return data
    } catch {
        return error
    }
}
const login = async(obj) => {
    let url = `${link}/auth/login`
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch (err) {
        return err
    }
}

const singUp = async (obj) => {
    let url = `${link}/customers`
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }  

}
const createOrder = async () => {
    let url = `${link}/orders`
    let bearer = document.cookie.split('=')[1]
    let token = 'Bearer ' + bearer
    let header = new Headers()
    header.append('Authorization', `${token}`)
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: header
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }
}
const addItemsToOrder = async (obj) => {
    let url = `${link}/orders/add-item`
    let bearer = document.cookie.split('=')[1]
    let token = 'Bearer ' + bearer
    let header = new Headers()
    header.append('Content-Type', 'application/json')
    header.append('Authorization', `${token}`)
    try {
        
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
            mode: 'cors',
            headers: header,
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }
}
const recoveryPassword = async (body) => {
    const url = `${link}/auth/recovery`
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }
}
const changePassword = async (obj) => {
    const url = `${link}/auth/change-password`
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }
}
const getMyOrders = async () => {
    let url = `${link}/profile/my-orders`
    let bearer = document.cookie.split('=')[1]
    let token = 'Bearer ' + bearer
    let header = new Headers()
    header.append('Authorization', `${token}`)
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: header
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }
}

export {getStikers, getStikerCategory, getStikerByName, login, singUp, createOrder, addItemsToOrder, recoveryPassword, changePassword, getMyOrders}