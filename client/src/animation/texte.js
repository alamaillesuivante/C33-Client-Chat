class ship {
    constructor() {
        this.isAlive = true
        this.debut = 600
        this.time = 0
        this.delay = Math.random() * 200
    }

    //les lignes se dessinent et la couleur change aléatoirement
    drawImage() {
        ctx.lineWidth = 1;
        this.couleurR = Math.floor(Math.random() * 255)
        this.couleurG = Math.floor(Math.random() * 255)
        this.couleurB = Math.floor(Math.random() * 255)
        this.debut += 6
        console.log(this.debut)
        ctx.lineTo(`${this.debut}`, 800)
        ctx.moveTo(`${this.debut}`, 2)
        ctx.strokeStyle = `rgb(${this.couleurR},${this.couleurG},${this.couleurB})`
        ctx.stroke();
    }

    tick() {
        console.log(this.debut)

        this.drawImage()
        if (this.time == this.delai) {
            this.drawImage()
            if (this.debut > 1200) {
                this.isAlive = false
                ctx.clearRect(600, 0, `${this.debut}`, 800)
            }
        } else {
            this.time++
        }
        if (this.debut > 1200) {
            this.isAlive = false
            ctx.clearRect(600, 0, `${this.debut}`, 800)
        }
    }
}