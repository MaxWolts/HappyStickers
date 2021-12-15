const link = 'https://happystiker.herokuapp.com/api/v1'

export const getAllstikers = async () => {
    try {
        const response = await fetch(`${link}/products`)
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
    let url = 'https://happystiker.herokuapp.com/api/v1/auth/login'
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