import { recoveryPassword } from '../api-stikers.mjs'
const $form = document.querySelector('.remember-my-password')
document.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData($form)
    recoveryPassword({
        email: data.get('email')
    }).then(res => {
        Swal.fire({
            icon: 'success',
            title: "Se envio un mensaje de recuperación de contraseña a tu correo",
            confirmButtonColor:' #f73455',
            confirmButtonAriaLabel: 'confirmar',
          })
    })
})