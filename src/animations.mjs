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
    gsap.to(`#${item.id}`, {minHeight: '62rem',duration:0.4})
}
export const animationItemheightUp = (item) => {
    gsap.to(`#${item.id}`, {minHeight: '36rem',duration:0.4})
}

// if(document.querySelector(`#c${id}`)) {}