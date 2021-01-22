import { signin } from './chat-api.js';
let spriteList = []
let cliquer = false
window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function() {
        return signin(this);
    }
    let texte1 = "Luke Skywalker est retourné parmi les siens sur la planète Tatooine pour tenter d'arracher son ami Han Solo aux griffes de l'ignoble Jabba le Hutt. Luke ne peut pas savoir que l'Empire Galactique a commencé à construire en secret une nouvelle station spatiale blindée bien plus puissante et terrifiante que la première Etoile de la Mort. Quand cette arme absolue sera achevée, ce sera la fin du petit groupe de résistants qui luttent pour ramener la liberté dans la galaxie..."

    spriteList.push(new generique('generic', texte1))

    let node = document.getElementById('signIn')
    window.onclick = function() {
        cliquer = true
        node.style.top = `${200}px `
        node.style.zIndex = 1;

    }
    const tick = () => {
        if (!cliquer) {
            spriteList.forEach(t => {
                t.tick()

            });
            requestAnimationFrame(tick)
        } else {
            const node = document.getElementById('starwars')
            spriteList.forEach(t => {
                t.remove()

            });
            node.style.backgroundImage = "url('../img/hyperspace.gif')"
            node.style.backgroundRepeat = "no-repeat"
            node.style.backgroundSize = `${105}%`
            node.style.backgroundPosition = 'top'
        }


    }
    tick()
});