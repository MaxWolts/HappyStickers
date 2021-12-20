import { changePassword } from '../api-stikers.mjs'
let url = window.location.href
const searchParams = new URLSearchParams(url);
let token = ''

for (let p of searchParams) {
    token = p[1];
}
const $form = document.querySelector('.change-password')
document.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData($form)
    const body = {
        token: token,
        newPassword: data.get('password')
    }
    if(data.get('password') !== data.get('r-password')) {
        Swal.fire({
            icon: 'error',
            title: "Las contraseñas no coinciden",
            confirmButtonColor:' #f73455',
            confirmButtonAriaLabel: 'confirmar',
        })
    }else {
        runRecovery(body)
    }
})
const runRecovery = (body) => {
    changePassword(body).then(res => {    
        if(res && !res.error) {
            Swal.fire({
                icon: 'success',
                title: "Se cambio la contraseña con exito",
                confirmButtonColor:' #f73455',
                confirmButtonAriaLabel: 'confirmar',
              })

        }else{
            alert('algo salio mal')
        }
    })
}
