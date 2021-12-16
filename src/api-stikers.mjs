const link = 'https://happystiker.herokuapp.com/api/v1'

export const getAllstikers = async () => {
    try {
        const response = await fetch(`${link}/products?limit=12&offset=0`)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const getStikerCategory = async (id) => {
    try {
        const response = await fetch(`${link}/categories/${id}`)
        const data = await response.json()
        return data
    } catch {
        return error
    }
}
export const getStikerByName = async(name) => {
    try {
        const response = await fetch(`${link}/products/?name=${name}`)
        const data = await response.json()
        return data
    } catch {
        return error
    }
}
export const login = async(obj) => {
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

export const singUp = async (obj) => {
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
export const createOrder = async () => {
    let url = `${link}/orders/1`
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
export const addItemsToOrder = async (obj) => {
    let url = `${link}/orders/add-item`
    let bearer = document.cookie.split('=')[1]
    let token = 'Bearer ' + bearer
    let header = new Headers()
    header.append('Content-Type', 'application/json')
    header.append('Authorization', `${token}`)
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: header,
            body: JSON.stringify(obj),
        })
        const data = await response.json()
        return data
    }catch (err) {
        return err
    }
}