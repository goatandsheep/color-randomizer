let rand = 0

/**
 * @param {DOMString} [element='body']
 */
function randomizeColor(element='body') {
    let randNext = 0
    // rand must be 6 hex digits
    while (randNext < 1048576) {
        
        randNext = Math.random()*16777215
    }
    rand = randNext
    const randomColor = Math.floor(rand).toString(16);
    const el = document.querySelector(element)
    el.style.backgroundColor = "#" + randomColor;
}

/**
 * @param {DOMString} [element='body']
 */
function randomDarkColor(element='body') {
    let randNext = Math.random() * 360
    let diff = Math.abs(rand - randNext)
    while (diff < 20) {
        diff = Math.abs(rand - randNext)
        randNext = Math.random() * 360
    }
    rand = randNext
    const randomColor = "hsl(" + rand + ", 100%, 25%)";
    const el = document.querySelector(element)
    el.style.backgroundColor = randomColor;
}

/**
 * @param {DOMString} [element='body']
 */
function randomLightColor(element='body') {
    let randNext = Math.random() * 360
    let diff = Math.abs(rand - randNext)
    while (diff < 20) {
        diff = Math.abs(rand - randNext)
        randNext = Math.random() * 360
    }
    rand = randNext
    const randomColor = "hsl(" + rand + ", 100%, 75%)";
    const el = document.querySelector(element)
    el.style.backgroundColor = randomColor;
}

module.exports = {
    randomizeColor,
    randomDarkColor,
    randomLightColor
}
