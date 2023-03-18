class Player {
    constructor (x=0, y=0) {
        this.x = x
        this.y = y
        this.width = 40
        this.height = 40
        this.direction = 'down'
    }

    draw (canvas) {
        const canvasEl = canvas
        const ctx = canvasEl.getContext('2d')

        ctx.fillStyle = 'purple'
        ctx.fillRect(this.x, this.y, 40, 40)
    }

    // update (array) {
    //     if (this.x < -2 || this.x > canvas.width + 2 || this.y < -2 || this.y < canvas.height + 2) {
    //         array.pop()
    //     } else {
    //         if (this.direction === 'left' || this.direction === 'right') {
    //             this.x += this.spd
    //         } else if (this.direction === 'up' || this.direction === 'down') {
    //             this.y = this.spd
    //         }
    //     }
    // }
}

class Bullet {
    constructor (x=0, y=0, direction) {
        this.id = 0
        this.x = x
        this.y = y
        this.spd = 5
        this.size = 10
        this.direction = direction
    }

    draw (canvas) {
        const canvasEl = canvas
        const ctx = canvasEl.getContext('2d')

        ctx.beginPath();
        ctx.strokeStyle = 'white'
        ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath()
    }

    refresh (array) {
        if (this.x < -2 || this.x > canvas.width + 2 || this.y < -2 || this.y < canvas.height + 2) {
            array.pop()
        } else {
            if (this.direction === 'left' || this.direction === 'right') {
                this.x += this.spd
            } else if (this.direction === 'up' || this.direction === 'down') {
                this.y = this.spd
            }
        }
    }
}

export { Player, Bullet }