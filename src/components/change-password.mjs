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
    console.log(token)
    const body = {
        token: token,
        newPassword: data.get('password')
    }
    console.log(typeof body.token)
    console.log(typeof body.newPassword)
    runRecovery(body)
})
const runRecovery = (body) => {
    changePassword(body).then(res => {    
        if(res && !res.error) {
            console.log(typeof res, res)
            alert('se cambio la contraseña exitosamente!')
        }else{
            console.log(typeof res, res.error)
            alert('algo salio mal')
        }
    })
}
