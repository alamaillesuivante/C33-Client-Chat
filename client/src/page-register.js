import { register } from './chat-api.js';
let spriteList2 = []
window.ctx = null

// position initale du text
let x = 0
let y = 150
let i = 0
let laFin = false
    //Declaration de variable poru la dimension du canvas
    //boolean pour demarrer la musique
let musicOnPlay = false
window.addEventListener("load", () => {
    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')

    document.querySelector("form").onsubmit = function() {
            return register(this);
        }
        //creation du canvas
    let pageX = canvas.offsetWidth
    let pageY = canvas.offsetHeight
    canvas.style.left = `${(screen.width-canvas.offsetWidth)/2}px`

    //ajout de la boite d'input a la bonne position
    let boitedentreeReg = document.getElementById('signIn')
    boitedentreeReg.style.top = `${80}px`
    boitedentreeReg.style.left = `${1000}px`
    boitedentreeReg.style.zIndex = 1
        //creation de l'audio
    const playImperial = () => {
            if (!musicOnPlay) {
                const music = new Audio('../img/ImperialMarch.mp3')
                musicOnPlay = true
                return music.play();
            }
        }
        //texte qui sera ajouter dans le canvas 
    const texte = ["Joignez-vous", "à notre alliance", "aidez-nous à", "combattre l'empire", "dès maintenant", "avant qu'il ne soit", " trop tard!"]

    //A chaque click dans un input de la boite d'entree ajouter du texte
    boitedentreeReg.onclick = function() {
        if (i < texte.length) {
            ctx.font = "64px  Ubuntu";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(texte[i], x, y);
            y += 60
            i++
        } // si tout le texte a été ajouté on dessiner une image et a ajoute la musique
        else {
            laFin = true
            spriteList2.splice(0, spriteList2.length)
            ctx.clearRect(0, 0, 1200, 800)
            const image = new Image();
            image.onload = drawImageActualSize;
            image.src = '../img/deathstar.jpg'
                //fonction qui ajoutera l'image dnas le canvas
            function drawImageActualSize() {
                ctx.drawImage(this, 0, 0, pageX, pageY);
                playImperial();
            }
        }
    }

    canvas.onmousemove = () => {

        spriteList2.push(new ship())
    }

    const tick = () => {
        if (!laFin) {
            spriteList2.forEach(s => s.tick())
            spriteList2 = spriteList2.filter(s => s.isAlive)
            requestAnimationFrame(tick)
        }
    }
    tick()
})




// import { register } from './chat-api.js';
// var ctx = null
//     // position initale du text
// let x = 0
// let y = 150
// let i = 0
//     //Declaration de variable poru la dimension du canvas
// let pageX = canvas.offsetWidth
// let pageY = canvas.offsetHeight
//     //boolean pour demarrer la musique
// let musicOnPlay = false
// window.addEventListener("load", () => {
//     document.querySelector("form").onsubmit = function() {
//             return register(this);
//         }
//         //creation du canvas
//     let canvas = document.getElementById('canvas')
//     ctx = canvas.getContext('2d')
//     canvas.style.left = `${(screen.width-canvas.offsetWidth)/2}px`
//         //ajout de la boite d'input a la bonne position
//     let boitedentreeReg = document.getElementById('signIn')
//     boitedentreeReg.style.top = `${80}px`
//     boitedentreeReg.style.left = `${1000}px`
//     boitedentreeReg.style.zIndex = 1
//         //creation de l'audio
//     const playImperial = () => {
//             if (!musicOnPlay) {
//                 const music = new Audio('../img/ImperialMarch.mp3')
//                 musicOnPlay = true
//                 return music.play();
//             }
//         }
//         //texte qui sera ajouter dans le canvas 
//     let texte = ["Joignez-vous", "à notre alliance", "aidez-nous", "à combattre l'empire", "dès maintenant", "avant qu'il ne soit trop tard!"]
//         //A chaque click dans un input de la boite d'entree ajouter du texte
//     boitedentreeReg.onclick = function() {
//         if (i < texte.length) {
//             ctx.font = "64px  Ubuntu";
//             ctx.fillStyle = "#FFFFFF";
//             ctx.fillText(texte[i], x, y);
//             y += 60
//             i++
//         } // si tout le texte a été ajouté on dessiner une image et a ajoute la musique
//         else {
//             const image = new Image();
//             image.onload = drawImageActualSize;
//             image.src = '../img/deathstar.jpg'
//                 //fonction qui ajoutera l'image dnas le canvas
//             function drawImageActualSize() {
//                 ctx.drawImage(this, 0, 0, pageX, pageY);
//                 playImperial();
//             }
//         }
//     }
// })