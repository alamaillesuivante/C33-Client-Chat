import { register } from './chat-api.js';
var ctx = null
let x = 0
let y = 150
let i = 0
let musicOnPlay = false
window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function() {
        return register(this);
    }
    let boitedentreeReg = document.getElementById('signIn')
    boitedentreeReg.style.top = `${80}px`
    boitedentreeReg.style.left = `${1000}px`
    boitedentreeReg.style.zIndex = 1

    const playImperial = () => {
        if (!musicOnPlay) {
            const music = new Audio('../img/ImperialMarch.mp3')
            musicOnPlay = true
            return music.play();
        }
    }

    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    canvas.style.left = `${(screen.width-canvas.offsetWidth)/2}px`

    let texte = ["Joignez-vous", "à notre alliance", "aidez-nous", "à combattre l'empire", "dès maintenant", "avant qu'il ne soit trop tard!"]
    let pageX = canvas.offsetWidth
    let pageY = canvas.offsetHeight

    boitedentreeReg.onclick = function() {
        if (i < texte.length) {
            ctx.font = "64px  Ubuntu";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(texte[i], x, y);
            y += 60
            i++
        } else {
            const image = new Image(); // Using optional size for image
            image.onload = drawImageActualSize; // Draw when image has loaded
            image.src = '../img/deathstar.jpg'

            function drawImageActualSize() {
                //void ctx.drawImage(image, dx, dy, dWidth, dHeight)
                ctx.drawImage(this, 0, 0, pageX, pageY);
                playImperial();

            }


        }
    }
})