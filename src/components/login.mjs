import { login } from '../api-stikers.mjs'

const $form = document.querySelector('.login-box')
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData($form)
    console.log(typeof data ,data)
    console.log(typeof data.get('email'),data.get('email'))
    let obj = {
        email: data.get('email'),
        password: data.get('password')
    }
    login(obj).then((res)=> {
        if(res) {
            document.cookie = `token=${res.token}`
            if (!localStorage.getItem('infoCart')) {
                window.location.href = "http://172.19.199.247:5500/index.html";
            } else {
                window.location.href = "http://172.19.199.247:5500/payment.html";
            }
        }
    })
})