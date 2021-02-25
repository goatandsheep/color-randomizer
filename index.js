let rand = 0

function randomizeColor(element) {
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

function randomDarkColor(element) {
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

function randomLightColor(element) {
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
