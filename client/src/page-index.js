import { signin } from './chat-api.js';
let spriteList = []
window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function() {
        return signin(this);
    }
    const theme = new Audio('../img/StarWars.mp3')
    const playTheme = () => {
        theme.play()
    }

    let texte = ["Il y a très longtemps dans une galaxie lointaine...", "", "", "Luke Skywalker est retourné ", " parmi les siens sur la planète", " Tatooine pour tenter d'arracher", " son ami Han Solo aux griffes", " de l'ignoble Jabba le Hutt.", " ", "Luke ne peut pas savoir que", " l'Empire Galactique a commencé ", "à construire en secret une", "nouvelle station spatiale blindée", "bien plus puissante et terrifiante ", "que la première Etoile de la Mort.", " Quand cette arme absolue sera", " achevée, ce sera la fin du petit", " groupe de résistants qui luttent", " pour ramener la liberté dans la galaxie..."]
    const node = document.getElementById('starwars')
    const boitedentree = document.getElementById('signIn')
    boitedentree.style.top = `${-200}px`

    let themeOnPlay = false
    let cliquer = false


    node.onkeydown = function() {
        if (!themeOnPlay) {
            for (let i = 0; i < texte.length; i++) {
                spriteList.push(new generique('generic', texte[i], i * 45))
            }
        }
        playTheme()
        themeOnPlay = true;
    }

    window.onclick = function() {
        cliquer = true
        boitedentree.style.top = `${350}px`

    }
    const tick = () => {

        if (!cliquer) {
            spriteList.forEach(t => t.tick());
            spriteList.filter(t => t.isAlive)

        } else {
            spriteList.forEach(t => {
                t.remove()

            });
            node.style.backgroundImage = "url('../img/hyperspace.gif')"
            node.style.backgroundRepeat = "no-repeat"
            node.style.backgroundSize = `${105}%`
            node.style.backgroundPosition = 'top'

        }
        requestAnimationFrame(tick)

    }
    tick()

});