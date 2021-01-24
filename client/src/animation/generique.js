class generique {
    constructor(gen, texte, y) {

        const node = document.getElementById('starwars')
        this.element = document.createElement('div')
        this.element.setAttribute('class', gen)
        node.appendChild(this.element)
        this.element.textContent = texte
        this.x = 22.5
        this.y = 800 + y
        this.element.style.color = 'yellow'
        this.element.style.fontSize = `${62}px`
        this.element.style.width = `${55}%`;
        this.element.style.transform = `skewX(${-25}deg`;
        this.element.style.textAlign = 'center'
        this.newFont = 64
        this.isAlive = true;
    }


    remove() { this.element.remove() }

    tick() {

        if (this.y > 200) {
            this.y--;
            this.newFont -= 0.03;
            this.element.style.fontSize = `${this.newFont}px`
            this.element.style.top = `${this.y}px`
            this.element.style.left = `${this.x}%`
        } else {
            this.element.remove();
            this.isAlive = false;
        }
    }
}