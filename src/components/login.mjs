import { login } from '../api-stikers.mjs'
import { offButton, onButton, loginSingUpOpacity, animationItemheightDown , animationItemheightUp} from '../animations.mjs'

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
let $login = document.querySelector('.login')
$login.style.display = 'block'
$login.style.opacity = '100'
let $signUp = document.querySelector('.sign-up')
$signUp.style.display = 'none'
$signUp.style.opacity = '0'
listenerSwapButtons()

function createAnimationSwap () {
    let login = 1
    let singUp = 0
    let animationSwap = async (className) => {
        if (className == 'active-login') {
            if (login == 0) {
                animationItemheightUp('login-and-sign-up-container', '33.5rem')
                onButton(className)
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
                animationItemheightDown('login-and-sign-up-container')
                onButton(className)
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
let animationSwap = createAnimationSwap()

function changeDisplay(className) {
    let $section = document.querySelector(`.${className}`)
    let display = $section.style.display
    if (display == 'none') {
        $section.style.display = 'block'
    }else {
        $section.style.display = 'none'
    }
}