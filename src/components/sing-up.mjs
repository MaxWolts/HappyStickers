import { singUp, login } from '../api-stikers.mjs'
let $form = document.querySelector('.sing-up-form')
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData($form)
    let obj = {
        name: data.get('name'),
        lastName: data.get('lastname'),
        phone: data.get('phone'),
        user: {
            email: data.get('email'),
            password: data.get('password')
        }
    }
    singUp(obj).then(()=> {
        login({
            email:data.get('email'),
            password: data.get('password')
        }).then( res => {
            document.cookie = `token=${res.token}`
        })
    })
})