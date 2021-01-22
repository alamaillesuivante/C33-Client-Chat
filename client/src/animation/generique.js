class generique {
    constructor(gen, texte) {

        const node = document.getElementById('starwars')
        this.element = document.createElement('div')
        this.element.setAttribute('class', gen)
        node.appendChild(this.element)
        this.element.textContent = texte
        this.x = 20
        this.y = 800
        this.element.style.color = 'yellow'
        this.element.style.fontSize = `${64}px`
        this.element.style.width = `${50}%`;
        this.element.style.transform = `skewX(${-20}deg`;

        //this.element.style.transform = `skewY(${5}deg`;


        this.element.style.textAlign = 'center'


        console.log(this.element.value)
    }

    remove() { this.element.remove() }
    tick() {

        this.y--;
        this.newWidth += 0.01;
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}%`

    }
}