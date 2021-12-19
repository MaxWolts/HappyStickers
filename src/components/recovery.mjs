import { recoveryPassword } from '../api-stikers.mjs'
const $form = document.querySelector('.remember-my-password')
document.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData($form)
    recoveryPassword({
        email: data.get('email')
    }).then(res => {
        console.log(res)
        alert('Se envio un mensaje de recuperacion a tu correo!')
    })
})