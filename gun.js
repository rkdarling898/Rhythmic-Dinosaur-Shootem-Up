class Bullet {
    constructor (x=0, y=0, direction) {
        this.x = x
        this.y = y
        this.spd = 5
        this.size = 4
        this.direction = direction
    }

    draw (canvas) {
        const canvasEl = canvas
        const ctx = canvasEl.getContext('2d')

        this.move()

        ctx.beginPath();
        ctx.fillStyle = 'white'
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath()
    }

    move () {
        switch (this.direction) {
            case 'up':
                this.y -= this.spd
                break;
            case 'left':
                this.x -= this.spd
                break;
            case 'down':
                this.y += this.spd
                break;
            case 'right':
                this.x += this.spd
                break;
        }
    }
}

class Gun {
    constructor (canvas) {
        this.canvas = canvas
        this.bullets = []
        this.delay = 0
    }

    shoot (x, y, direction) {
        if (this.delay === 0) {
            this.bullets.push(new Bullet(x, y, direction))
            this.delay++
        } else if (this.delay === 9) {
            this.delay = 0
        } else {
            this.delay++
        }
    }
    
    resetDelay () {
        this.delay = 0
    }

    draw () {
        this.bullets.forEach(bullet => {
            let oob = this.outOfBounds(bullet)
            
            if (oob === true) {
                this.bullets.splice(bullet, 1)
            } else {
                bullet.draw(this.canvas)
            }
        })
    }

    outOfBounds (bullet) {
        if (bullet.x < -4 || bullet.x > this.canvas.width + 4 || 
            bullet.y < -4 || bullet.y > this.canvas.height) {
                console.log('yep')
                return true
            } else {
                return false
            }
            
    }
}

export { Gun, Bullet }