import { login, singUp } from '../api-stikers.mjs'
import { offButton, onButton, loginSingUpOpacity, animationItemheightDown , animationItemheightUp} from '../animations.mjs'

let $form = document.querySelector('.login-box')
let $formSignUp = document.querySelector('.sign-up-form')
console.log($formSignUp)
document.addEventListener('submit', (event) => {
    event.preventDefault()
    let data = {}
    let objData = {}
    if (event.target.className === 'login-box') {
        data = new FormData($form)
        objData = {
            email: data.get('email'),
            password: data.get('password')
        }
        runLogin(objData)
    }else {
        data = new FormData($formSignUp)
        console.log(data.get('password') , data.get('repeat-password'))
        if (data.get('password') !== data.get('repeat-password')) {
            alert('Los password no coinsiden')
        }else {
            objData = {
                name: data.get('name'),
                lastName: data.get('lastname'),
                phone: data.get('phone'),
                user: {
                    email: data.get('email'),
                    password: data.get('password')
                }
            }
            runSignUp(objData)
        }
    }
    
})

const listenerSwapButtons = () => {
    document.addEventListener('click', (event) => {
        const elementTarget = event.target
        if (elementTarget.tagName == 'BUTTON') {
            let className = elementTarget.className
            if (className == 'active-login' || className == 'active-sign-up') {
                animationSwap(className)
            }
        }
    })
}
let animationSwap = createAnimationSwap()
listenerSwapButtons()
let $login = document.querySelector('.login')
$login.style.display = 'block'
$login.style.opacity = '100'
let $signUp = document.querySelector('.sign-up')
$signUp.style.display = 'none'
$signUp.style.opacity = '0'


function createAnimationSwap () {
    let login = 1
    let singUp = 0
    let animationSwap = async (className) => {
        if (className == 'active-login') {
            if (login == 0) {
                onButton(className)
                animationItemheightUp('login-and-sign-up-container', '33.5rem')
                changeDisplay('login')
                changeDisplay('sign-up')
                loginSingUpOpacity('sign-up', $signUp.style.opacity)
                setTimeout(() => {
                    loginSingUpOpacity('login', $login.style.opacity)
                    login++
                    offButton('active-sign-up')
                    singUp--
                }, 400);
            }
        }else {
            if (singUp == 0) {
                onButton(className)
                animationItemheightDown('login-and-sign-up-container', '66rem')
                changeDisplay('login')
                loginSingUpOpacity('login', $login.style.opacity)
                setTimeout(() => {
                    changeDisplay('sign-up')
                    loginSingUpOpacity('sign-up', $signUp.style.opacity)
                    login = 0
                    offButton('active-login')
                    singUp = 1
                }, 400);
            }
        }
    }
    return animationSwap
}


function changeDisplay(className, newDisplay) {
    let $section = document.querySelector(`.${className}`)
    let display = $section.style.display
    if (display == 'none') {
        if (newDisplay) {
            $section.style.display = newDisplay
        }else {
            $section.style.display = 'block'
        }
    }else {
        $section.style.display = 'none'
    }
}

function runLogin (objData) {
    login(objData).then((res)=> {
        console.log(typeof res, res)
        if(res && !res.error) {
            document.cookie = `token=${res.token}`
            if (!localStorage.getItem('infoCart')) {
                window.location.href = "../../index.html";
            } else {
                window.location.href = "../../payment.html";
            }
        }else{
            alert('Datos incorrectos', res.error)
        }
    })
}

function runSignUp (objData) {
    singUp(objData).then(res => {    
        if(res && !res.error) {
            alert('Cuenta creada')
            setTimeout(() => {
                login({
                    email: objData.user.email,
                    password: objData.user.password
                }).then( res => {
                    if(res && !res.error) {
                        document.cookie = `token=${res.token}`
                        if (!localStorage.getItem('infoCart')) {
                            window.location.href = "../../index.html";
                        } else {
                            window.location.href = "../../payment.html";
                        }
                    }else{
                        alert('Datos incorrectos', res.error)
                    }
                })
            }, 3000);
        }else{
            console.log(typeof res, res.error)
            alert('algo salio mal')
        }
    })
}