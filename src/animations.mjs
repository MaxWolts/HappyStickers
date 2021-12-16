export const animationOpacity =  (element) => {
    if (element.style.opacity == 0) {
        gsap.to(`#${element.id}`, {
            duration:0.4,
            opacity: 1,
        })
    }else {
        element.disable = true
        gsap.to(`#${element.id}`, {
            duration:0.4,
            opacity: 0,
        })
    }
}
export const animationItemheightDown = (item) => {
    gsap.to(`#${item.id}`, {minHeight: '64rem',duration:0.4})
}
export const animationItemheightUp = (item) => {
    gsap.to(`#${item.id}`, {minHeight: '36rem',duration:0.4})
}

const animationMenu = () => {
    let flag = 0
    const animationMenu = () => {
        if(flag == 0) {
            gsap.to(`.menu`, {
                x: '100vw',
                duration: 0.3
            })
            flag++
        }else {
            gsap.to(`.menu`, {
                x: '0vw',
                duration: 0.3
            })
            flag--
        }
    }
    return animationMenu
}
const animationCart = () => {
    let flag = 0
    const animationMenu = () => {
        if(flag == 0) {
            gsap.to(`.cart`, {
                x: '-100vw',
                duration: 0.3
            })
            flag++
        }else {
            gsap.to(`.cart`, {
                x: '0vw',
                duration: 0.3
            })
            flag--
        }
    }
    return animationMenu
}
const animationCartIcon = () => {
    let flag = 0
    const animationMenu = () => {
        if(flag == 0) {
            gsap.to(`.cartIcon`, {
                rotate: 360,
                duration: 0.3
            })
            flag++
        }else {
            gsap.to(`.cartIcon`, {
                rotate: 0,
                duration: 0.3
            })
            flag--
        }
    }
    return animationMenu
}

const animationLinesMenu = () => {
    let flag = 0
    const move = () => {
        if (flag == 0) {
            gsap.to('.lines-1', {
                duration: 0.5,
                rotate: 45,
                x: 4.5
            })
            gsap.to('.lines-2', {
                duration: 0.5,
                rotate: -45,
                y: 11,
                x: 3.5
            })
            gsap.to('.lines-3', {
                duration: 0.5,
                rotate: -45,
                x: 4.5
            })
            flag++
        }else {
            gsap.to('.lines-1', {
                duration: 0.5,
                rotate: 0,
                x: 0
            })
            gsap.to('.lines-2', {
                duration: 0.5,
                rotate: 0,
                y: 0,
                x: 0
            })
            gsap.to('.lines-3', {
                duration: 0.5,
                rotate: 0,
                x: 0
            })
            flag--
        }
    }
    return move
}

export const controlLeftRightAnimations = () => {
    const menuAnimation = animationMenu()
    const cartAnimation = animationCart()
    const linesAnimation = animationLinesMenu()
    const cartIconAnimation = animationCartIcon()
    let menu = 0
    let cart = 0
    const controlAnimation = (button) => {
        if (button == 'menu') {
            if (cart == 1) {
                cartIconAnimation()
                cartAnimation()
                cart = 0
            }
            menuAnimation()
            linesAnimation()
            if (menu == 0) {
                menu++
            } else {
                menu--
            }
        }
        if (button == 'cart') {
            cartIconAnimation()
            if (menu == 1) {
                menuAnimation()
                linesAnimation()
                menu--
            }
            cartAnimation()
            if (cart == 0) {
                cart++
            } else {
                cart--
            }
        }
    }
    return controlAnimation

}

export const animationAddItem = (className) => {
    let animation = gsap.to(`${className}`, {
        text: 'Añadido!',
        backgroundColor: 'white',
        color: 'black',
        duration: 0.5,
        ease:Linear.easeNone, paused:true, reversed:true
    })
    return animation
}