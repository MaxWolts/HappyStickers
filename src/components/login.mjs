import { login } from '../api-stikers.mjs'

const $form = document.querySelector('.login-box')
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData($form)
    let obj = {
        email: data.get('email'),
        password: data.get('password')
    }
    login(obj).then((res)=> {
        if(res) {
            document.cookie = `token=${res.token}`
            window.location.href = "http://172.31.34.219:5500/index.html";
        }
    })
})