const FONT_DEC = 0.03
const FONT_SIZE = 62
const FIN_GENERIQUE = 200

class generique {
    constructor(gen, texte, y) {
        //ajout du texte passé en parametre a 
        //une class  et précision de la position initial et du style
        const node = document.getElementById('starwars')
        this.element = document.createElement('div')
        this.element.setAttribute('class', gen)
        node.appendChild(this.element)
        this.element.textContent = texte
        this.x = 22.5
        this.y = 800 + y
        this.element.style.fontSize = `${FONT_SIZE}px`
        this.element.style.transform = `skewX(${-25}deg`;
        this.newFont = FONT_SIZE
        this.isAlive = true;
    }


    remove() { this.element.remove() }

    tick() {

        if (this.y > FIN_GENERIQUE) {
            this.y--;
            this.newFont -= FONT_DEC;
            this.element.style.fontSize = `${this.newFont}px`
            this.element.style.top = `${this.y}px`
            this.element.style.left = `${this.x}%`
        } else {
            this.element.remove();
            this.isAlive = false;
        }


    }
}