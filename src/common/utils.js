export function debounce(func, delay) {
    let timer = null
    // if(this.timer){
    //     clearTimeout(this.timer)
    // }
    // this.timer = setTimeout(func.apply(this,args),delay)
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}